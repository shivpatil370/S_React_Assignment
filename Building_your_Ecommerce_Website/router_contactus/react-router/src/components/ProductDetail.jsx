// import React from 'react'

import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const ProductDetail = () => {
   const params=useParams();
//    console.log(params)
//    const productId=params.productId;

  return (
    <div>
       <h1>Product Details page!</h1>
       <p>{params.productId}</p>
    </div>
  )
}

export default ProductDetail
