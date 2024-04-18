// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './store/auth-context.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './components/Profile.jsx'
import LoginPage from './components/LoginPage.jsx'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:"/" , element:<LoginPage/>},
      {path:"/profile" , element:<Profile/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>,
  </AuthContextProvider>
)
