import useDebounce from "../useDebounce";
import { searchService } from "../../services/search";
import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";

const useHandleAutoCompleteSearch = (input: string) => {
  const { debounceValue } = useDebounce(input, 500);

  const handleAutoCompleteSearch = async () => {
    try {
      const res = await searchService.autoComplete(debounceValue);
      return res.data;
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
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
