import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import Navbar from "../navbar/Navbar";
import SignUp from "../SignUp";

const appRouter=createBrowserRouter([
     {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<SignUp/>
            },
            {
                path:"/home",
                element:<Navbar/>
            }
        ]
     }
]);

export default appRouter;