import axiosInstance from "../axiosConfing";

export const weatherService = {
  getCurrentWeather: async (loactionKey: number) =>
    axiosInstance.get(
      `/currentconditions/v1/${loactionKey}?apikey=zQn4Btxe1Ggvo9o4D5Ajaaf7XzfYdS0w`
    ),
};
