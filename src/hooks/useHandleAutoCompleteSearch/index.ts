import { useQuery } from "react-query";
import { searchService } from "../../services/search";
import useDebounce from "../useDebounce";

const useHandleAutoCompleteSearch = (input: string) => {
  const { debounceValue } = useDebounce(input, 500);

  const handleAutoCompleteSearch = async () => {
    try {
      const res = await searchService.autoComplete(debounceValue);
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["autoComplete", debounceValue],
    queryFn: handleAutoCompleteSearch,
    enabled: debounceValue !== "",
  });

  return { data };
};

export default useHandleAutoCompleteSearch;
