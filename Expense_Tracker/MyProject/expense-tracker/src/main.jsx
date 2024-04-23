// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import appRouter from './RouterDom/AppRouter.jsx';
import { RouterProvider } from 'react-router-dom';
import ContextProvider from './context-api/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
  </ContextProvider>,
)
