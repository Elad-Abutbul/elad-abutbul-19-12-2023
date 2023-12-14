import { useState } from "react";
import { searchService } from "../../services/search";

const useHandleAutoCompleteSearch = () => {
  const [autoCompleteList, setAutoCompleteList] = useState<Array<object>>([]);
  const handleAutoCompleteSearch = async (input: string) => {
    try {
      const response = await searchService.autoComplete(input);
      response && setAutoCompleteList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { autoCompleteList, handleAutoCompleteSearch };
};
export default useHandleAutoCompleteSearch;
