import { useEffect, useState } from "react";
import useHandleAutoCompleteSearch from "../../../../hooks/useHandleAutoCompleteSearch";
import { Autocomplete, TextField } from "@mui/material";

interface SearchProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  selectedOption: any;
}

interface Option {
  LocalizedName: string;
}



export const Search = ({ setSelectedOption, selectedOption }: SearchProps) => {
  const [input, setInput] = useState<string>("Tel Aviv");
  const { data } = useHandleAutoCompleteSearch(input);

  useEffect(() => {
    const defaultOption = data?.find((option: Option) => option.LocalizedName === "Tel Aviv");
    if (defaultOption) {
      setSelectedOption(defaultOption);
    }
  }, [data, setSelectedOption]);

  return (
    <div>
      <Autocomplete
        options={(data || []) as Option[]}
        getOptionLabel={(option) => option.LocalizedName===undefined? "" : option.LocalizedName}
        style={{ width: 300 }}
        value={selectedOption}
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
