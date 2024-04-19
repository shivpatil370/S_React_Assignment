import { createContext } from "react";

const AppContext=createContext({
    data:[],
    addData:()=>{},
    Token:"",
     isLogin:false,
     Login:()=>{},
     LogOut:()=>{}
});

export default AppContext;