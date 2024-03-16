import React, { useEffect, useRef } from 'react'
import styles from "./Forms.module.css";

const Forms = ({setData}) => {
    // const [data,setData]=useState([]);
    const idRef=useRef();
    const priceRef=useRef();
    const nameRef=useRef();
    const categoryRef=useRef();


const handleSubmit=(event)=>{
    event.preventDefault();

    const currentid=idRef.current.value;
    const currentprice=priceRef.current.value;
    const currentname=nameRef.current.value;
    const currentcategory=categoryRef.current.value;

    let obj={
        currentid:currentid,
        currentprice:currentprice,
        currentname:currentname,
        currentcategory:currentcategory
    };

    // console.log(obj);
    let newDatas=JSON.parse(localStorage.getItem("items"))||[];
    newDatas.push(obj);
    localStorage.setItem("items",JSON.stringify(newDatas));
    setData(newDatas);

    // console.log(newDatas)
    idRef.current.value="";
    priceRef.current.value="";
    nameRef.current.value="";
    categoryRef.current.value="Electronics";
}

useEffect(()=>{
    let newDatas=JSON.parse(localStorage.getItem("items"))||[];
    setData(newDatas);
},[])

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit}>
        <label for="prodid">Product ID:</label>
        <input id="prodid" type='number' ref={idRef} required/>

        <label for="price">Selling Price:</label>
        <input id="price" type='number' ref={priceRef} required/>

        <label for="name">Product Name:</label>
        <input id="name" type='text' ref={nameRef} required/>

        <label for="category">Choose a Category:</label>
        <select id='category' ref={categoryRef}>
              <option>Electronics</option>
              <option>Food</option>
              <option>Skincare</option>
        </select>

        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default Forms
