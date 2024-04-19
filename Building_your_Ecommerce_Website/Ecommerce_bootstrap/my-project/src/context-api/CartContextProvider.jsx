// import React from 'react'
import { useEffect, useState } from "react"
import AppContext from "./CartContext"

const CartContextProvider = (props) => {
   const [cart, setCart] = useState([]);
   const [total,setTotal]=useState(0);
   const [allPrice,setAllPrice]=useState(0);
   const [sho,setSho]=useState(false);
   const localtoken=localStorage.getItem("tkn");
   const [token,setToken]=useState(localtoken);
//    console.log(total)

       const islogged=!!token;

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
            setTotal(t);

            const price=cart.reduce((acc,e)=>acc+e.price*e.qty,0);
            setAllPrice(price);
        }
        else{

            setCart((prev)=>{
             return [...prev,ele]
            })
        }

    };

    useEffect(()=>{
        const t=cart.reduce((acc,e)=>acc+e.qty,0);
        setTotal(t);

        const price=cart.reduce((acc,e)=>acc+e.price*e.qty,0);
        setAllPrice(price);
    },[cart]);


    const setShowFun=(val)=>{
        //  console.log(val);
        setSho(val)
    };


    const handleLogin=(token)=>{
        setToken(token);
        // console.log(token)
        localStorage.setItem("tkn",token)
    };

    const handleLogOut=()=>{
        setToken("");
        localStorage.removeItem("tkn");
    };


   // console.log(cart);

   const contextVal={
     data:cart,
     addData:handleData,
     Quantity:total,
     totalPrice:allPrice,
     setShow:setShowFun,
     Show:sho,
     Token:token,
     isLogin:islogged,
     Login:handleLogin,
     LogOut:handleLogOut
   }

  return (
    <AppContext.Provider value={contextVal}> 
          {props.children}
    </AppContext.Provider>
  )
}

export default CartContextProvider
