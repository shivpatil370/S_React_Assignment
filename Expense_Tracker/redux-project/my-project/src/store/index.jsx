
import {createSlice,configureStore} from "@reduxjs/toolkit"

const initialCounterstate={counter:0,showToggle:true};
  
      const counterSlice=createSlice({
        name:'counter',
        initialState:initialCounterstate,
        reducers:{
            INCREMENT:(state,action)=>{
                state.counter=state.counter+action.payload
            },
            DECREMENT:(state,action)=>{
                state.counter=state.counter-action.payload
            },
            toggle(state){
                state.showToggle=!state.showToggle
            }
        }
      });


      const initialAuthState={
        isAuthenticated:false
      }
      const authSlice=createSlice({
            name:"authentication",
            initialState:initialAuthState,
            reducers:{
               Login(state){
                  state.isAuthenticated=true;
               },
               Logout(state){
                  state.isAuthenticated=false;
               }
            }
      })


    //   ...........STORE..............
const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        authentication:authSlice.reducer
    }
});

export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;
export default store;