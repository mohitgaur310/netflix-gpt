import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie:null,
    popularMovies:null,
    topRatedMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovie: (state,action)=>{
        state.trailerMovie=action.payload
    },
    addPopularMovies: (state, action)=>{
      state.popularMovies=action.payload
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerMovie, addPopularMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;
