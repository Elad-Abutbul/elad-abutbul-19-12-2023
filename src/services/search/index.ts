import axiosInstance from "../axiosConfing";

export const searchService = {
  autoComplete: async (input: string) =>
    axiosInstance.get(
      `/locations/v1/cities/autocomplete?apikey=zQn4Btxe1Ggvo9o4D5Ajaaf7XzfYdS0w&q=${input}`
    ),
};
