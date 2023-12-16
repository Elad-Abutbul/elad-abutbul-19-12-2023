import axiosInstance from "../axiosConfing";

export const weatherService = {
  getCurrentWeather: async (loactionKey: number) =>
    axiosInstance.get(
      `/currentconditions/v1/${loactionKey}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    ),

  get5DaysWeather: async (loactionKey: number) =>
    axiosInstance.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${loactionKey}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    ),
};
