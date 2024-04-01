import {createSlice} from '@reduxjs/toolkit'

const userslice= createSlice({
    name:'user',
initialState:null,
reducers:{
    addUsers:(state,action,payload)=>{
        return action.payload;
    },
    removeuser:(state, action)=>{
return null;
    },
}
});


export const {addUsers, removeuser} =userslice.actions;
export default userslice.reducer;