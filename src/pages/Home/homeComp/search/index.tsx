import { useEffect, useState } from "react";
import useHandleAutoCompleteSearch from "../../../../hooks/useSearch";
import { SEARCH } from "../../../../constants";
import { Favorites } from "../../../../types";
import { useSelector } from "react-redux";
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
  const [input, setInput] = useState<string>(SEARCH.DEFAULT_VALUE);
  const { data: searchList } = useHandleAutoCompleteSearch(input);
  const favorites = useSelector((state: Favorites) => state.favorites.list);

  useEffect(() => {
    const defaultOption = searchList?.find((option: Option) => option.LocalizedName === SEARCH.DEFAULT_VALUE);
    if (defaultOption) {
      setSelectedOption(defaultOption);
    }
  }, [searchList, setSelectedOption]);

  const isFavorite = (searchItem: string) =>
    searchItem && favorites.some((favorite) => favorite.LocalizedName === searchItem);

  return (
    <Autocomplete
      options={searchList || []}
      getOptionLabel={(option: { LocalizedName: string }) => (
        isFavorite(option.LocalizedName)
          ? `${option.LocalizedName} ❤️`
          : option.LocalizedName
      )} value={selectedOption}
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
