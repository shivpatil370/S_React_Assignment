// import React from 'react'

import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  return (
    <div className="p-3 gap-2">
      <h1>products!</h1>
      
      
        
      <Link to="product/p1">shirt</Link>
      <br></br>
      <Link to="product/p2">pant</Link>
      <br></br>
      <Link to="product/p3">dress</Link>
      
      
      
    </div>
  )
}

export default Products
