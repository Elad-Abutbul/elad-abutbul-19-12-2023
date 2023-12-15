import axiosInstance from "../axiosConfing";

export const searchService = {
  autoComplete: async (input: string) =>
    axiosInstance.get(
      `/locations/v1/cities/autocomplete?apikey=Cyhe8A1UeJVrSXDrCUObLAxAVJd6n1dx&q=${input}`
    ),
};
