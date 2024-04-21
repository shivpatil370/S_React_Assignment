import { createContext } from "react";



const AppContext=createContext({
     data:"",
     addData:()=>{},
     total:0,
     addTotal:()=>{},
     editdata:"",
     addEditData:()=>{}
});

export default AppContext;