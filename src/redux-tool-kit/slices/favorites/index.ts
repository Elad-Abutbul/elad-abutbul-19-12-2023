import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  Key: string;
  LocalizedName: string;
  weather: {
    temperature: {
      tempC: string;
      tempF: string;
    };
  };
  weatherText: string;
}

interface FavoritesState {
  list: FavoriteItem[];
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      state.list.unshift(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<{ Key: string }>) => {
      state.list = state.list.filter((item) => item.Key !== action.payload.Key);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
