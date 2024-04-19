// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom';
import appRouter from './components/appRouter.jsx';
import CartContextProvider from './context-api/CartContextProvider.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
  <RouterProvider router={appRouter}>
       <App />
    </RouterProvider>
    </CartContextProvider>,
)
