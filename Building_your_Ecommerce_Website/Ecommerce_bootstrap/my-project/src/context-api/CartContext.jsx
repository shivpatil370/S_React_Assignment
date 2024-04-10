import { createContext } from "react";

const AppContext=createContext({
    data:[],
    addData:()=>{},
});

export default AppContext;