import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "./home.type";



const initialState: HomeState = {
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfiguration: (state, action: PayloadAction<HomeState['url']>) => {
      state.url = action.payload;
    },
    getGenres: (state, action: PayloadAction<HomeState['genres']>) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer as any;
