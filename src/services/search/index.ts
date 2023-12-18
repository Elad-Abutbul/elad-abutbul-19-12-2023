import { SEARCH } from "../../constants";
import axiosInstance from "../axiosConfing";

export const searchService = {
  search: async (input: string) =>
    axiosInstance.get(
      `/locations/v1/cities/autocomplete?apikey=${
        import.meta.env.VITE_API_KEY
      }&q=${input}`
    ),

  checkSearchInput: (debounceValue: string) => {
    return debounceValue !== "" && SEARCH.ENGLISH_REGEX.test(debounceValue);
  },
};
