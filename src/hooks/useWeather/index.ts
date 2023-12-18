import { useQuery } from "react-query";
import { weatherService } from "../../services";

const useWeather = (
  locationKey: string,
  serviceWeather: (loactionKey: string) => Promise<any>
) => {
  const { data } = useQuery({
    queryFn: () => weatherService.weatherApi(locationKey, serviceWeather),
    queryKey: [serviceWeather.name, locationKey],
    enabled: locationKey !== "",
  });
  return { data };
};

export default useWeather;
