import {Navigate, createBrowserRouter} from "react-router-dom";
import App from "../../App";
import Navbar from "../navbar/Navbar";
import SignUp from "../SignUp";
import ComposeMail from "../sidebar/ComposeMail";
import SentPage from "../sidebar/SentPage";
import ReadSentMail from "../sidebar/ReadSentMail";
import InboxPage from "../sidebar/InboxPage";
import ReadInboxMail from "../sidebar/ReadInboxMail";
import { useSelector } from "react-redux";


const PrivateRouter=({children})=>{
    const tokens=useSelector(store=>store.auth.token)||localStorage.getItem("token");
    console.log(tokens);
    return tokens?children:<Navigate to="/login"/>
}

const appRouter=createBrowserRouter([
     {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<PrivateRouter><InboxPage/></PrivateRouter>
            },
            {
                path:"/compose",
                element:<PrivateRouter><ComposeMail/></PrivateRouter>
            },
            {
                path:"/home",
                element:<PrivateRouter><Navbar/></PrivateRouter>
            },
            {
                path:"/login",
                element:<SignUp/>
            },
            {
                path:"/sentmail",
                element:<PrivateRouter><SentPage/></PrivateRouter>
            },
            {
                path:"/sentmail/readsentmail/:id",
                element:<PrivateRouter><ReadSentMail/></PrivateRouter>
            },
            {
                path:"/inbox/readinboxmail/:id",
                element:<PrivateRouter><ReadInboxMail/></PrivateRouter>
            }
            
            
        ]
     }
]);

export default appRouter;