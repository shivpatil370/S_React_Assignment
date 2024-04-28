import {createSlice} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{toggle:false},
    reducers:{
        AddToggle(state){
           state.toggle=!state.toggle;
        }
    }
});

export const cartActions=cartSlice.actions;
export default cartSlice;