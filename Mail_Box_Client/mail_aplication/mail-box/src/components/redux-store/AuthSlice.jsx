import { createSlice } from "@reduxjs/toolkit";



 const init={token:"",totalInboxItems:0,totalSentBoxItems:0,render:[]}
const authSlice=createSlice({
    name:'auth',
    initialState:init,

    reducers:{
        login(state,action){
            state.token=action.payload;
            
        },
        logout(state){
            state.isLoggedIn=false
        },
        totalInbox(state,action){
           state.totalInboxItems=action.payload;
        },
        totalSentBox(state,action){
            state.totalSentBoxItems=action.payload;
        },
        renderdata(state,action){
           state.render=action.payload;
        }
    }
});

export const authActions=authSlice.actions;
export default authSlice;