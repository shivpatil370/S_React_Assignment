
// import React from 'react'
import FormContext from "./form-context"


const contextData={
    data:[],
    editId:null,
    AddDatafromContext:()=>{ }
}

const ContextApi = (props) => {
  return (
    <FormContext.Provider value={contextData}>
         {props.children}
    </FormContext.Provider>
  )
}

export default ContextApi
