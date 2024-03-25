import { createContext } from "react";

const FormContext=createContext({
    data:[],
    editId:null,
    AddDatafromContext:()=>{}
});

export default FormContext;