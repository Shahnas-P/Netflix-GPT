import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        movieVideos:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
    
        },
        addMovieVideos:(state,action)=>{
            state.movieVideos = action.payload
        }

    }
})
export const {addNowPlayingMovies , addMovieVideos} = movieSlice.actions
export default movieSlice.reducer;