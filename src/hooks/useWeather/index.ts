import { useQuery } from "react-query";
import { weatherApi } from "../../apiFunctions/weatherApi";

const useWeather = (locationKey, weatherService) => {
  const { data } = useQuery({
    queryFn: () => weatherApi(locationKey, weatherService),
    queryKey: [weatherService.name, locationKey],
    enabled: locationKey !== "",
  });
  return { data };
};

export default useWeather;
