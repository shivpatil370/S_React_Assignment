import { createContext } from "react";


const AppContext=createContext({
    token:"",
    AddLogin:()=>{}
});

export default AppContext;