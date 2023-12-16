import { weatherService } from "../../services/weather";
import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";

const useGet5DaysWeather = (selectedOption: object) => {
  const get5DaysWeather = async () => {
    try {
      const res = await weatherService.get5DaysWeather(selectedOption.Key);
      return res.data;
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const { data: fiveDaysWeather } = useQuery({
    queryKey: ["5DaysWeather", selectedOption?.Key],
    queryFn: get5DaysWeather,
    enabled: selectedOption?.Key !== undefined,
  });

  const getDayOfWeek = (dateString: string) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  };

  const convertToFahrenheitToCelsius = (fahrenheit: number) => {
    return `${(((fahrenheit - 32) * 5) / 9).toFixed()} C°`;
  };

  return { fiveDaysWeather, getDayOfWeek, convertToFahrenheitToCelsius };
};
export default useGet5DaysWeather;
