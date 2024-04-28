import { createSlice } from "@reduxjs/toolkit";

const initialState={lisLoggedIn:false,token:"",userId:""}
const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
       Login(state,action){
          state.token=action.payload,
          state.userId=action.mailid,
          state.lisLoggedIn=true
       },
       Logout(state){
           state.lisLoggedIn=false
       }
    }
});

export const authActions=authSlice.actions;
export default  authSlice.reducer;