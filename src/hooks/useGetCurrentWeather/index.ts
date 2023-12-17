import { weatherService } from "../../services/weather";
import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";
interface SelectedOption {
  Key: string;
}
const useGetCurrentWeather = (selectedOption: SelectedOption) => {
  const getCurrentWeather = async () => {
    try {
      const res = await weatherService.getCurrentWeather(selectedOption?.Key);
      return res.data;
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const { data: weather } = useQuery({
    queryKey: ["currentWeather", selectedOption?.Key],
    queryFn: getCurrentWeather,
    enabled: selectedOption?.Key !== undefined,
  });

  return { weather };
};
export default useGetCurrentWeather;
