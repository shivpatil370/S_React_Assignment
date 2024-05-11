import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import Navbar from "../navbar/Navbar";
import SignUp from "../SignUp";
import ComposeMail from "../sidebar/ComposeMail";
import SentPage from "../sidebar/SentPage";
import ReadSentMail from "../sidebar/ReadSentMail";

const appRouter=createBrowserRouter([
     {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<ComposeMail/>
            },
            {
                path:"/home",
                element:<Navbar/>
            },
            {
                path:"/login",
                element:<SignUp/>
            },
            {
                path:"/sentmail",
                element:<SentPage/>
            },
            {
                path:"/sentmail/readsentmail/:id",
                element:<ReadSentMail/>
            }
            
        ]
     }
]);

export default appRouter;