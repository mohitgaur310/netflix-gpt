import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'GPT',
    initialState:{
        toggleSearch:false,
        languageGpt:'en',
    },
    reducers:{
        updateToggleSearch: (state,action)=>{
            state.toggleSearch= !state.toggleSearch
        },
        updateLanguageGpt : (state,action)=>{
            state.languageGpt=action.payload
        },
    }
})

export const {updateToggleSearch, updateLanguageGpt}=gptSlice.actions;
export default gptSlice.reducer;