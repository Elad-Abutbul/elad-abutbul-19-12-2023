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
  getDayOfWeek: (dateString: string) => {
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
  },
  convertToFahrenheitToCelsius: (fahrenheit: number) => {
    return `${(((fahrenheit - 32) * 5) / 9).toFixed()} C°`;
  },
};
