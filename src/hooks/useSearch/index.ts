import useDebounce from "../useDebounce";
import { searchService } from "../../services";
import { weatherApi } from "../../apiFunctions";
import { useQuery } from "react-query";

const useSearch = (input: string) => {
  const { debounceValue } = useDebounce(input, 500);

  const { data } = useQuery({
    queryKey: ["autoComplete", debounceValue],
    queryFn: () => weatherApi(debounceValue, searchService.search),
    enabled: searchService.checkSearchInput(debounceValue),
  });

  return { data };
};

export default useSearch;
