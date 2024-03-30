// import React from 'react'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import MedicineContext from "../context-api/MedicineContext";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [check,setCheck]=useState([]);
    // const [msg,setMsg]=useState(false)

    const ctx=useContext(MedicineContext);

    const handleAddCart=(ele,id)=>{
        // console.log(ele)
        
        //  setMsg(false)
          ctx.addData(ele);
           

          let obj={
            id:id,
            name:ele.name,
            desc:ele.desc,
            price:ele.price,
            qty:`${Number(ele.qty)-1}`
          };

        //   console.log(obj)
          MyPost(obj,id);
        
    };

    const MyPost= async(obj,id)=>{
       await axios.put(`http://localhost:3000/data/${id}`,obj)
          .then((res)=>{
            // console.log(res)
               setCheck(res.data);
          })
          .catch((err)=>{
            console.log(err)
          })
    }


     useEffect(() => {
        axios.get("http://localhost:3000/data")
        .then((res)=>{
            // console.log(res.data);
            setProduct(res.data);
        })
     }, [ctx.render,check])

  return (
    <div className={styles.box}>
      <h1>Medicine products</h1>

      <ul>
        {
            product.map((ele)=>{
                return <li key={ele.id}>{`${ele.name}-${ele.desc}-Rs:${ele.price}-`}
                {ele.qty<1?<span style={{color:"red",fontWeight:"bolder"}}><span style={{color:"black"}}>qty:</span>out of stock</span>:
                <span>{`qty:${ele.qty}`}</span>}
                <button style={ele.qty<1?{backgroundColor:"lightgray"}:{backgroundColor:"rgb(244,67,54)"}} disabled={ele.qty<1?true:false} onClick={()=>handleAddCart(ele,ele.id)}>Add to bill</button></li>
            })
        }
      </ul>
    </div>
  )
}

export default Product
