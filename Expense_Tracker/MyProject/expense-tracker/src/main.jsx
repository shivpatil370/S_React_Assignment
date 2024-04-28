// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import appRouter from './RouterDom/AppRouter.jsx';
import { RouterProvider } from 'react-router-dom';
import ContextProvider from './context-api/ContextProvider.jsx';
import store from './redux-store/index.jsx';
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
  <ContextProvider>
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
  </ContextProvider>,
    </Provider>
)
