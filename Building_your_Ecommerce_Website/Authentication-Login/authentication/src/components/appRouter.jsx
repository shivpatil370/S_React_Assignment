import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "./LoginPage";
import Welcome from "./Welcome";
import Profile from "./Profile";
import { useContext } from "react";
import AuthContext from "../store/auth-context";



const RequireAuth = ({ children }) => {
    const ctx = useContext(AuthContext);
    return ctx.isLoggedIn ? children : <Navigate to="/" />;
  };



const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {path:"/" , element:<LoginPage/>},
        {path:"/login" , element:
        (<RequireAuth>
            <Welcome/>
        </RequireAuth>)},
        {path:"/profile" , element:(
         <RequireAuth>
            <Profile/>
        </RequireAuth>
        )}
      ]
    }
  ]);

  export default appRouter;