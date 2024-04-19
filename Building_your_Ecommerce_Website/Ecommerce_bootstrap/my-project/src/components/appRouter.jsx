
import { useContext } from 'react';
import AppContext from '../context-api/CartContext.jsx';
import { Navigate } from "react-router-dom";
import {createBrowserRouter} from 'react-router-dom';
import App from '../App.jsx';
import LoginPage from './LoginPage.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Body from './Body.jsx';


const RequiredAuth=({children})=>{
    const ctx=useContext(AppContext);
    return ctx.isLogin ? children : <Navigate to="/"/>
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<LoginPage/>
      },
       {
        path:"/home",
        element:<Home/>

       },
       {
         path:'/about',
         element:<About/>
        },
        {
         path:"/:store",
         element:(
          <RequiredAuth>
              <Body/>
         </RequiredAuth>
        )
        },
        {
            path:'*',
            element:<LoginPage/>
          },
    ]
  },
  
]);

export default appRouter;