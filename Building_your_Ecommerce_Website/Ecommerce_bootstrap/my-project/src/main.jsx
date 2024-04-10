// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './components/About';
import Body from './components/Body.jsx';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
       {
        path:"/",
        element:<Body/>

       },
       {
        path:'/about',
        element:<About/>
       }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
       <App />
    </RouterProvider>,
)
