import { createContext } from "react";


const MedicineContext=createContext({
    data:[],
    render:[],
    Addrender:()=>{},
    addData:()=>{},
    DecrementBtn:()=>{},
    IncrementBtn:()=>{},
    Total:0,
    AllTotal:0
});

export default MedicineContext;