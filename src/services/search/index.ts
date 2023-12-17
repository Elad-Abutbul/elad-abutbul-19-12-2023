import axiosInstance from "../axiosConfing";

export const searchService = {
  search: async (input: string) =>
    axiosInstance.get(
      `/locations/v1/cities/autocomplete?apikey=${
        import.meta.env.VITE_API_KEY
      }&q=${input}`
    ),

  checkSearchInput: (debounceValue: string) => {
    const englishRegex = /^[A-Za-z\s]*$/;
    return debounceValue !== "" && englishRegex.test(debounceValue);
  },
};
