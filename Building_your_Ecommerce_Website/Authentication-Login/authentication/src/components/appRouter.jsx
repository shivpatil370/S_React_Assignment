import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "./LoginPage";
import Welcome from "./Welcome";
import Profile from "./Profile";




const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {path:"/" , element:<LoginPage/>},
        {path:"/login" , element:<Welcome/>},
        {path:"/profile" , element:<Profile/>}
      ]
    }
  ]);

  export default appRouter;