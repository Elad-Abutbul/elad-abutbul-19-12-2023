import axiosInstance from "../axiosConfing";

export const weatherService = {
  getCurrentWeather: async (loactionKey: string) =>
    axiosInstance.get(
      `/currentconditions/v1/${loactionKey}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    ),

  get5DaysWeather: async (loactionKey: string) =>
    axiosInstance.get(
      `/forecasts/v1/daily/5day/${loactionKey}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    ),
};
