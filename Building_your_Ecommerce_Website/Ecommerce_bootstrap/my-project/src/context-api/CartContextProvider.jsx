// import React from 'react'
import { useEffect, useState } from "react"
import AppContext from "./CartContext"

const CartContextProvider = (props) => {
   const [cart, setCart] = useState([]);
   const [total,setTotal]=useState(0);
//    console.log(total)

    const handleData=(ele)=>{
    //    console.log(ele)
        const index= cart.findIndex((el)=>el.id==ele.id);
        const currentEle=cart[index];

        let allData;
        if(currentEle){
            let updateval={
                ...currentEle,
                qty:Number(currentEle.qty)+1
            };

            allData=cart;
            allData[index]=updateval;

            const t=cart.reduce((acc,e)=>acc+e.qty,0);
            setTotal(t)
        }
        else{

            setCart((prev)=>{
             return [...prev,ele]
            })
        }

    };

    useEffect(()=>{
        const t=cart.reduce((acc,e)=>acc+e.qty,0);
        setTotal(t)
    },[cart])

   const contextVal={
     data:cart,
     addData:handleData,
     Quantity:total
   }

  return (
    <AppContext.Provider value={contextVal}> 
          {props.children}
    </AppContext.Provider>
  )
}

export default CartContextProvider
