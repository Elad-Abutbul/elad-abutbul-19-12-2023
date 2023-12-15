import { useState, useEffect } from "react";
import useDebounce from "../../../../hooks/useDebounce";
import useHandleAutoCompleteSearch from "../../../../hooks/useHandleAutoCompleteSearch";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const Search = ({ setSelectedOption }) => {
  const [input, setInput] = useState<string>('');
  const { debounceValue } = useDebounce(input, 500);
  const { autoCompleteList, handleAutoCompleteSearch } = useHandleAutoCompleteSearch();

  useEffect(() => {
    const searchAuto = async () => {
      if (debounceValue !== '' && input !== '')
        await handleAutoCompleteSearch(debounceValue);

    };

    searchAuto();
  }, [debounceValue, input, handleAutoCompleteSearch]);

  return (
    <div>
      <Autocomplete
        options={autoCompleteList}
        getOptionLabel={(option) => option.LocalizedName}
        isOptionEqualToValue={(option, value) => option.Key === value.Key}
        style={{ width: 300 }}
        onChange={(e, selectedOption) => setSelectedOption(selectedOption)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="filled"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      />
    </div>
  );
};
