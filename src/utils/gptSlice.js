import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'GPT',
    initialState:{
        toggleSearch:false,
    },
    reducers:{
        updateToggleSearch: (state,action)=>{
            state.toggleSearch= !state.toggleSearch
        } 
    }
})

export const {updateToggleSearch}=gptSlice.actions;
export default gptSlice.reducer;