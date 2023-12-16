import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [
      {
        id: 328328,
        name: "London",
        weather: { temperature: { tempC: `${5} C°`, tempF: `${20} F°` } },
      },
      {
        id: 57911,
        name: "Longyan",
        weather: { temperature: { tempC: `${15} C°`, tempF: `${32} F°` } },
      },
    ],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list.unshift(action.payload);
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
