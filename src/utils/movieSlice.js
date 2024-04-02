import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        newtrailervideo:null,
    },
    reducers:{
        addNowplayingmovies:(state,action)=>{
state.nowplayingmovies=action.payload;
        },

        addTrailerVideo:(state,action)=>{
state.newtrailervideo=action.payload;
        }
    }
})
export const {addNowplayingmovies, addTrailerVideo}=movieSlice.actions;
export default movieSlice.reducer;