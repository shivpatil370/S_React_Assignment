import { createContext } from "react";


const BookCartContext=createContext({
    data:[],
    render:[],
    getEditId:null
});

export default BookCartContext;