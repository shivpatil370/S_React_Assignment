// import React from 'react'
import FormContext from "./form-context"

const FormProvide = (props) => {


  const handleaddData=(ele)=>{
    console.log(ele)
  }


   const contextvalue={
     data:[],
     addData:handleaddData
   }

  return (
    <FormContext.Provider value={contextvalue}>
         {props.children}
    </FormContext.Provider>
  )
}

export default FormProvide
