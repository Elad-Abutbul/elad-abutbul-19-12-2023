import { weatherService } from "../../services/weather";
import { useQuery } from "react-query";

const useGetCurrentWeather = (selectedOption) => {
  const getCurrentWeather = async () => {
    try {
      const res = await weatherService.getCurrentWeather(selectedOption?.Key);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: weather } = useQuery({
    queryKey: ["currentWeather", selectedOption?.Key],
    queryFn: getCurrentWeather,
    enabled: !isNaN(selectedOption?.Key),
  });

  return { weather };
};
export default useGetCurrentWeather;
