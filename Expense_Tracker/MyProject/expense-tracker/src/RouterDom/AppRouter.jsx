import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/LoginPage";
import CompleteProfile from "../components/Navbar/CompleteProfile";
import UpdateProfilePage from "../components/Navbar/UpdateProfilePage";


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/", element:<LoginPage/>},
            {path:"/profile", element:<CompleteProfile/>},
            {path:"/updateprofile", element:<UpdateProfilePage/>}
        ]
    }
]);

export default appRouter;