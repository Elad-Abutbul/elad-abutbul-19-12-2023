import { useQuery } from "react-query";
import { weatherApi } from "../../apiFunctions";

const useWeather = (
  locationKey: string,
  weatherService: (loactionKey: string) => Promise<any>
) => {
  const { data } = useQuery({
    queryFn: () => weatherApi(locationKey, weatherService),
    queryKey: [weatherService.name, locationKey],
    enabled: locationKey !== "",
  });
  return { data };
};

export default useWeather;
