import { createContext } from "react";


const MedicineContext=createContext({
    data:[],
    render:[],
    Addrender:()=>{},
    addData:()=>{},
    Total:0,
    AllTotal:0
});

export default MedicineContext;