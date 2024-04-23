import { createContext } from "react";


const AppContext=createContext({
    token:"",
    AddLogin:()=>{},
    isLogin:false,
    userProfile:"",
    AdduserProfile:()=>{}
});

export default AppContext;