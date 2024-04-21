// import React from 'react'
import { useState } from "react"
import AppContext from "./context-api"

const ContextProvider = ({children}) => {
    const [deta,setDeta]=useState([]);
    const [total,setTotal]=useState(0);
    const [edit,setEdit]=useState("");


    const handleAdd=(data)=>{
        setDeta([...deta,data])
    };

    const handleTotal=(total)=>{
        setTotal(total)
    };

    const handleEdit=(ele)=>{
        // console.log(ele)
        setEdit(ele);
    }
    // console.log(edit)

const contextval={
    data:deta,
    addData:handleAdd,
    total:total,
    addTotal:handleTotal,
    editdata:edit,
    addEditData:handleEdit
}


  return (
    <AppContext.Provider value={contextval}>
         {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
