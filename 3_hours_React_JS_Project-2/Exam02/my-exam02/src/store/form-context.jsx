import { createContext } from "react";


const FormContext=createContext({
    data:[],
    render:[],
    addData:()=>{},
    TotalPrice:0,
    CartTotal:0
});

export default FormContext;