import { createSlice } from "@reduxjs/toolkit";


const init={totalExpense:0}
const expensesSlice=createSlice({
    name:"expenses",
    initialState:init,
    reducers:{
       AddExpenses(state,action){
          state.totalExpense=(action.payload);
       }
    }
});

export const expensesActions=expensesSlice.actions;
export default expensesSlice.reducer;