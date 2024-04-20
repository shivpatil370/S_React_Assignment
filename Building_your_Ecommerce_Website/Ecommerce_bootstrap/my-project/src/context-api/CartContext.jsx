import { createContext } from "react";

const AppContext=createContext({
    data:[],
    addData:()=>{},
    Token:"",
    UserMail:"",
     isLogin:false,
     Login:()=>{},
     LogOut:()=>{},
     Quantity:0,
     CartTotal:()=>{}
});

export default AppContext;