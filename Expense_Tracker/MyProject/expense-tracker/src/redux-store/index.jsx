import {configureStore} from '@reduxjs/toolkit';
import authSliceReducer from './AuthReducer';
import expensesSliceReducer from "./ExpensesReducers";
import themeSliceReducer from './ThemeReducer';

const store=configureStore({
    reducer:{
       auth:authSliceReducer,
       expenses:expensesSliceReducer,
       theme:themeSliceReducer
    }
});
export default store;