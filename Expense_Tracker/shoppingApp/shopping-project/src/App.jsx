// import { useState } from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cartActions } from './redux-store/CartReducer';

let status=true;
function App() {
const toggle=useSelector(store=>store.cart.toggle);
const cart=useSelector(store=>store.cart.data);
const dispatch=useDispatch()
// console.log(cart)

if(status){
  status=false;
}

useEffect(()=>{
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
                console.log(data);
                alert("data added successfully!")
             })
          }
          else{
              return res.json().then((err)=>{
                   console.log(err);
                   alert("something went wrong!")
              })
          }
     })
},[cart])

  return (
    <>
      <Layout>
      {toggle&&<Cart />}
      <Products />
    </Layout>
    </>
  )
}

export default App
