import { useEffect, useState } from "react";
import useHandleAutoCompleteSearch from "../../../../hooks/useSearch";
import { Autocomplete, TextField } from "@mui/material";
import styles from '../../Home.module.css';

interface SearchProps {
  setSelectedOption: CallableFunction;
  selectedOption: Option
}

interface Option {
  LocalizedName: string
}

export const Search = ({ setSelectedOption, selectedOption }: SearchProps) => {
  const [input, setInput] = useState<string>("Tel Aviv");
  const { data:searchList } = useHandleAutoCompleteSearch(input);

  useEffect(() => {
    const defaultOption = searchList?.find((option: Option) => option.LocalizedName === "Tel Aviv");
    if (defaultOption) {
      setSelectedOption(defaultOption);
    }
  }, [searchList, setSelectedOption]);

  return (
    <Autocomplete
      options={searchList || []}
      getOptionLabel={(option: Option) => (option.LocalizedName || '')}
      value={selectedOption}
      className={styles.search}
      onChange={(_, selectedOption) => setSelectedOption(selectedOption)}
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
  );
};
