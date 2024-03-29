// import React from 'react'
import { useState } from "react"
import MedicineContext from "./MedicineContext"

const ContextProvider = (props) => {
    const [medicines, setMedicines] =useState([]);
    const [render,setRender]=useState([]);
    const [total,setTotal]=useState(0);
    const [all, setAll]=useState(0);
   console.log(total)

    const AddDatatoCart=(ele)=>{
        // console.log(ele)
        let total=medicines.reduce((acc,e)=>{
            return acc+Number(e.qty);
        },1);
        setTotal(total);

        let all=medicines.reduce((acc,el)=>{
            return acc+Number(el.price)*Number(el.qty);
        },0);
        setAll(all);
        // console.log("total",total)

         let index=medicines.findIndex((el)=>el._id==ele._id);
         console.log(index)
         let currentItem=medicines[index];
         
         let alldata;
         if(currentItem){
            let newdata={
                ...currentItem,
                qty:`${Number(currentItem.qty)+1}`
            };

            alldata=medicines;
            alldata[index]=newdata;
            setMedicines(alldata);
         }
         else{ 

            let obj={
                _id:ele._id,
                name:ele.name,
                desc:ele.desc,
                price:ele.price,
                qty:1
              };

         
        setMedicines((prev)=>{
            return [...prev, obj];
        });
       }
    }

    const addRenderdata=(ele)=>{
        setRender(ele);
    }


   const contextval={
    data:medicines,
    render:render,
    Addrender:addRenderdata,
    addData:AddDatatoCart,
    Total:total,
    AllTotal:all
   }

  return (
    <MedicineContext.Provider value={contextval}>
         {props.children}
    </MedicineContext.Provider>
  )
}

export default ContextProvider
