import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list.unshift(action.payload);
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((item) => item.Key !== action.payload.Key);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
