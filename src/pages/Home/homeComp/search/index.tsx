import { useEffect, useState } from "react";
import useHandleAutoCompleteSearch from "../../../../hooks/useHandleAutoCompleteSearch";
import { Autocomplete, TextField } from "@mui/material";
import styles from '../../Home.module.css';

interface SearchProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  selectedOption: Option
}

interface Option {
  LocalizedName: string
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
    <Autocomplete
      options={data || []}
      getOptionLabel={(option: Option) => (option.LocalizedName || '')}
      value={selectedOption}
      className={styles.search}
      onChange={(_,selectedOption) => setSelectedOption(selectedOption)}
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
