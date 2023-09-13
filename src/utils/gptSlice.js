import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",

  initialState: {
    toggleSearch: false,
    languageGpt: "en",
    gptMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    updateToggleSearch: (state, action) => {
      state.toggleSearch = !state.toggleSearch;
    },
    updateLanguageGpt: (state, action) => {
      state.languageGpt = action.payload;
    },
    addGptMovies: (state, action) => {
      const { moviesNames, movieResultsTMDB } = action.payload;
      state.gptMovies = movieResultsTMDB;
      state.gptMovieNames = moviesNames;
    },
    removeMoviesData: (state, action) => {
      state.gptMovieNames = null;
      state.gptMovies = null;
    },
  },
});

export const { updateToggleSearch, updateLanguageGpt, addGptMovies, removeMoviesData  } =
  gptSlice.actions;
export default gptSlice.reducer;
