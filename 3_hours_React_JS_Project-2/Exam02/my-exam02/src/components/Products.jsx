// import React from 'react'

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import FormContext from "../store/form-context";

const Products = () => {
  const [deta,setDeta]=useState([]);
  const [is,setIs]=useState([]);
 
  // console.log(deta)
const ctx=useContext(FormContext);



  useEffect(()=>{
    axios.get("http://localhost:3000/data")
    .then((res)=>{
        // console.log(res.data)
        setDeta(res.data);
    })

  },[ctx.render,is]);


  const handleLarge=(id,ele)=>{
       if(id){
         ctx.addData(id,ele);
      

        let obj={
          name:ele.name,
          desc:ele.desc,
          price:ele.price,
          lar:`${Number(ele.lar)-1}`,
          medium:ele.medium,
          small:ele.small,
          qty:ele.qty
        };
        axios.put(`http://localhost:3000/data/${id}`,obj)
        .then((res)=>{
          setIs(res.data);

        })
       }
  }

  const handleMedium=(id,ele)=>{
    if(id){
      // console.log(ele)
      ctx.addData(id,ele);

      let obj={
        name:ele.name,
        desc:ele.desc,
        price:ele.price,
        lar:ele.lar,
        medium:`${Number(ele.medium)-1}`,
        small:ele.small,
        qty:ele.qty
      };
      axios.put(`http://localhost:3000/data/${id}`,obj)
      .then((res)=>{
        setIs(res.data);
      })
     }

  }


  const handleSmall=(id,ele)=>{

    if(id){
      ctx.addData(id,ele);
      
      let obj={
        name:ele.name,
        desc:ele.desc,
        price:ele.price,
        lar:ele.lar,
        medium:ele.medium,
        small:`${Number(ele.small)-1}`,
        qty:ele.qty
      };
      // console.log(obj)
      axios.put(`http://localhost:3000/data/${id}`,obj)
      .then((res)=>{
        setIs(res.data);
        
      })
     }

  }



  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
          deta?.map((ele)=>{
            
            return <li key={ele.id}>{`${ele.name}-${ele.desc}-${ele.price}-`}<button onClick={()=>{
              handleLarge(ele.id,ele)
            }}>{`buyLarge(${ele.lar})`}</button><button onClick={()=>{
               handleMedium(ele.id,ele)
            }}>{`buyMedium(${ele.medium})`}</button><button onClick={()=>{
              handleSmall(ele.id,ele)
            }}>{`buySmall(${ele.small})`}</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default Products
