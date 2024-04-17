// import React from 'react'

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
   const [products, setProducts]=useState([]);


  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        // console.log(data);
        setProducts(data);
      })
  },[])

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,auto)"}} className="p-3 gap-4 justify-content-around">
    
         {
            products.map((ele)=>{
                return <NavLink key={ele.id} to={`/product/${ele.id}`} style={{textDecoration:"none",color:"black"}}>
                <div className=" border p-2 bg-light">
                        <p>{ele.title}</p>
                        <img src={ele.image} alt="img" className="w-50 h-50 border " />
                        <h3>RS:{ele.price}</h3>
                </div>
                    </NavLink>
            })
         }
      
      
    </div>
  )
}

export default Products
