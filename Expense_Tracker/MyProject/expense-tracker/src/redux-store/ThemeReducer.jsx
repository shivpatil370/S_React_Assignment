import { createSlice } from "@reduxjs/toolkit";

const init={isDark:false}
const themeSlice=createSlice({
    name:"theme",
    initialState:init,
    reducers:{
        AddTheme(state){
           state.isDark=!state.isDark;
        }
    }
});

export const themeActions=themeSlice.actions;
export default themeSlice.reducer;