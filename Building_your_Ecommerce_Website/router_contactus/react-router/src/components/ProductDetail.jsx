// import React from 'react'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const ProductDetail = () => {
    
   const params=useParams();
  //  console.log(params)
   const productId=params.productId;

const [products, setProducts]=useState([]);
  //  console.log(products.title)

  useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        // console.log(data);
        setProducts(data);
      })
  },[])

  return (
    <div className="w-25 border p-2 g-4 bg-light m-auto">
     <p>{products.title}</p>
     <img src={products.image} alt="img" className="w-50 h-50 border " />
     <h3>RS:{products.price}</h3>
    </div>
  )
}

export default ProductDetail
