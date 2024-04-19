// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './store/auth-context.jsx'
import { RouterProvider } from 'react-router-dom'
// import Profile from './components/Profile.jsx'
// import LoginPage from './components/LoginPage.jsx'
// import Welcome from './components/Welcome.jsx'
import appRouter from './components/appRouter.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>,
  </AuthContextProvider>
)
