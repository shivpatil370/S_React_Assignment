import { createSlice } from "@reduxjs/toolkit";



 const init={isLoggedIn:false,totalInboxItems:0,totalSentBoxItems:0}
const authSlice=createSlice({
    name:'auth',
    initialState:init,

    reducers:{
        login(state){
            state.isLoggedIn=true
        },
        logout(state){
            state.isLoggedIn=false
        },
        totalInbox(state,action){
           state.totalInboxItems=action.payload;
        },
        totalSentBox(state,action){
            state.totalSentBoxItems=action.payload;
        }
    }
});

export const authActions=authSlice.actions;
export default authSlice;