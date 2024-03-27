// import React from 'react'
import { useEffect, useState } from "react"
import FormContext from "./form-context"

const FormProvide = (props) => {
  const [cartData,setCartData]=useState([])
  const [cart,setCart]=useState(0);

// console.log(cartData);


  const handleaddData=(id,ele)=>{
    // TOTAL CART ITEMS=>
    let total=cartData.reduce((acc,el)=>{
      return acc+Number(el.qty);
    },1);
    setCart(total);
    // console.log(total)
    
    // FIND INDEX=>
    const currentIndex=cartData.findIndex((item)=> item.id===id);
    const currentItem=cartData[currentIndex];
       let updatedItems;
// console.log("current",currentItem.qty)
       if(currentItem){
        const newupdate={
          ...currentItem,
            qty:`${Number(currentItem.qty)+Number(ele.qty)}`
        }
        updatedItems=cartData;
        updatedItems[currentIndex]=newupdate;
        setCartData(updatedItems);
       }
       else{ 
    setCartData((prev)=>{
      return [...prev, ele];
    });
  }
  
  };



  
  let totalPrice=cartData.reduce((acc,ele)=>{
    return acc+ele.price*ele.qty
},0)
  // console.log(totalPrice)



   const contextvalue={
     data:cartData,
     render:[],
     addData:handleaddData,
     TotalPrice:totalPrice,
     CartTotal:cart
   }

  return (
    <FormContext.Provider value={contextvalue}>
         {props.children}
    </FormContext.Provider>
  )
}

export default FormProvide
