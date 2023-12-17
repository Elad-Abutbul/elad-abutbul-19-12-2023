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
    } catch (error:any) {
      enqueueSnackbar(error.message, { variant: "error" });
      return [];
    }
  };

  const checkInput = () => {
    const englishRegex = /^[A-Za-z\s]*$/;
    return debounceValue !== "" && englishRegex.test(debounceValue);
  };

  const { data } = useQuery({
    queryKey: ["autoComplete", debounceValue],
    queryFn: handleAutoCompleteSearch,
    enabled: checkInput(),
  });

  return { data };
};

export default useHandleAutoCompleteSearch;
