// import React from 'react'
import { useEffect, useState } from "react"
import MedicineContext from "./MedicineContext"

const ContextProvider = (props) => {
    const [medicines, setMedicines] =useState([]);
    const [render,setRender]=useState([]);
    const [total,setTotal]=useState(0);
    const [all,setAll]=useState(0);
//    console.log(total)


useEffect(()=>{
    let all=medicines.reduce((acc,el)=>{
        return acc+Number(el.qty)*Number(el.price);
    },0);
    setAll(all);

    let total=medicines.reduce((acc,e)=>{
        return acc+Number(e.qty);
    },0);
    setTotal(total);
},[render,medicines])

    const AddDatatoCart=(ele)=>{
        // console.log(ele)
       

        
        // console.log("total",total)

         let index=medicines.findIndex((el)=>el.id==ele.id);
        //  console.log(index)
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
            setRender(ele)
         }
         else{ 


            let obj={
                id:ele.id,
                name:ele.name,
                desc:ele.desc,
                price:ele.price,
                qty:1
              };

         
        setMedicines((prev)=>{
            return [...prev, obj];
        });
        
          setRender(ele)
       }
    }

    const addRenderdata=(ele)=>{
        setRender(ele);
    };


    const ProductDecrement=(ele,id)=>{
        // console.log(ele)
        let index=medicines.findIndex((el)=>el.id==id);
        //  console.log(index)
         let currentItem=medicines[index];
           if(Number(currentItem.qty)==1){
                let filterDeta=medicines.filter((el)=>{
                    return el.id!==currentItem.id;
                });

                setMedicines(filterDeta);
                setRender(ele)
           }
           else{ 
        let index=medicines.findIndex((el)=>el.id==id);
        //  console.log(index)
         let currentItem=medicines[index];
         
         let alldata;
         if(currentItem){
            let newdata={
                ...currentItem,
                qty:`${Number(currentItem.qty)-1}`
            };

            alldata=medicines;
            alldata[index]=newdata;
            setMedicines(alldata);
            setRender(ele)
             }
            }


    };

    const ProductIncrement=(ele,id)=>{
        
        let index=medicines.findIndex((el)=>el.id==id);
        //  console.log(index)
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
            setRender(ele)
             }
    }


   const contextval={
    data:medicines,
    render:render,
    Addrender:addRenderdata,
    addData:AddDatatoCart,
    DecrementBtn:ProductDecrement,
    IncrementBtn:ProductIncrement,
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
