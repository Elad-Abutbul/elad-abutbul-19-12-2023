import { useState } from "react";
import useHandleAutoCompleteSearch from "../../../../hooks/useHandleAutoCompleteSearch";
import { Autocomplete, TextField } from "@mui/material";

export const Search = ({ setSelectedOption }) => {
  const [input, setInput] = useState<string>("");
  const { data } = useHandleAutoCompleteSearch(input);
  return (
    <div>
      <Autocomplete
        options={data || []}
        getOptionLabel={(option) => option.LocalizedName}
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
