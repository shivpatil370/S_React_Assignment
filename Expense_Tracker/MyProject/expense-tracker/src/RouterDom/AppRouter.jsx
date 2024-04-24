import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/LoginPage";
import CompleteProfile from "../components/Navbar/CompleteProfile";
import UpdateProfilePage from "../components/Navbar/UpdateProfilePage";
import { useContext } from "react";
import AppContext from "../context-api/contextApi";


const PrivateRoute=({children})=>{
    const ctx=useContext(AppContext);
    return ctx.token?children:<Navigate to="/"/>
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/", element:<LoginPage/>},
            {path:"/profile", element:<PrivateRoute><CompleteProfile/></PrivateRoute>},
            {path:"/updateprofile", element:<PrivateRoute><UpdateProfilePage/></PrivateRoute>}
        ]
    }
]);

export default appRouter;