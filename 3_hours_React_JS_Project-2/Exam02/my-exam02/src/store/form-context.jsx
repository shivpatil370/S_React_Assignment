import { createContext } from "react";


const FormContext=createContext({
    data:[],
    addData:()=>{}
});

export default FormContext;