import { useEffect, useState } from "react";
import useHandleAutoCompleteSearch from "../../../../hooks/useSearch";
import { Autocomplete, TextField } from "@mui/material";
import styles from '../../Home.module.css';
import { SEARCH } from "../../../../constants";

interface SearchProps {
  setSelectedOption: CallableFunction;
  selectedOption: Option
}

interface Option {
  LocalizedName: string
}

export const Search = ({ setSelectedOption, selectedOption }: SearchProps) => {
  const [input, setInput] = useState<string>(SEARCH.DEFAULT_VALUE);
  const { data: searchList } = useHandleAutoCompleteSearch(input);

  useEffect(() => {
    const defaultOption = searchList?.find((option: Option) => option.LocalizedName === SEARCH.DEFAULT_VALUE);
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
