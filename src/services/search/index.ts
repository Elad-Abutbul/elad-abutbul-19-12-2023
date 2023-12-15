import axiosInstance from "../axiosConfing";

export const searchService = {
  autoComplete: async (input: string) =>
    axiosInstance.get(
      `/locations/v1/cities/autocomplete?apikey=apSd5LRzaF9IEEJsrk0o23UuyGFLoshh&q=${input}`
    ),
};
