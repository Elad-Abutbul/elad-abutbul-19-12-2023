import axiosInstance from "../axiosConfing";

export const searchService = {
  
  autoComplete: async (input: string) =>
    axiosInstance.get(
      `/locations/v1/cities/autocomplete?apikey=${
        import.meta.env.VITE_API_KEY
      }&q=${input}`
    ),
};
