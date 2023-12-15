import { useState } from "react";
import { weatherService } from "../../services/weather";

const useGetCurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<object>([]);
  const getCurrentWeather = async (loactionKey: number) => {
    try {
      const res = await weatherService.getCurrentWeather(loactionKey);
      res && setCurrentWeather(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return { currentWeather, getCurrentWeather };
};
export default useGetCurrentWeather;
