// import { useState } from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { cartActions } from './redux-store/CartReducer';
import Notification from './components/UI/Notification';

let status=true;
// let check=false;
function App() {
  const [note,setNote]=useState({})
const toggle=useSelector(store=>store.cart.toggle);
const cart=useSelector(store=>store.cart.data);
const changed=useSelector(store=>store.cart.changed);
const dispatch=useDispatch()
// console.log(cart)


useEffect(()=>{
  fetch("https://userdata-499d4-default-rtdb.firebaseio.com/cart.json")
  .then((res)=>{
        return res.json();
  })
  .then((data)=>{
    // console.log(data)
    const cartData=Object.values(data);
    // console.log(cartData)
    dispatch(cartActions.DirectAdd(cartData))
  })
},[])

useEffect(()=>{
  if(status){
    status=false;
    return
  }
  // check=true;
          if(changed){
     setNote({title:"Adding...",message:"data adding to cart!"})
     fetch("https://userdata-499d4-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart),
      headers:{"Content-Type":"application/json"}
     })
     .then((res)=>{
          if(res.ok){
             return res.json().then((data)=>{
                  // data?.map((ele)=>{
                  //   // console.log(ele)
                  // })
                  dispatch(cartActions?.AddRenders(data))
                // console.log(data);
                // alert("data added successfully!")
                  setNote({title:"success",message:"data added to cart successfully!"})
             })
          }
          else{
              return res.json().then((err)=>{
                   console.log(err);
                   setNote({title:"err",message:"data not added, something error!"})
              })
          }
     })
    }
},[cart,changed]);


  return (
    <>
    {<Notification note={note}/>}
      <Layout>
      {toggle&&<Cart />}
      <Products />
    </Layout>
    </>
  )
}

export default App
