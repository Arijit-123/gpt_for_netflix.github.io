import { createSlice } from "@reduxjs/toolkit";
const gptslice=createSlice({

    name:"gpt",
    initialState:{
        showgptsearch:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showgptsearch=!state.showgptsearch;
        },
    },
});

export const {toggleGptSearchView} = gptslice.actions;
export default gptslice.reducer;