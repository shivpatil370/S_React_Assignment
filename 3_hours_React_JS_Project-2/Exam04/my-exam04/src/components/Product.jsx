// import React from 'react'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import MedicineContext from "../context-api/MedicineContext";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [check,setCheck]=useState([]);
    const [msg,setMsg]=useState(false)

    const ctx=useContext(MedicineContext);

    const handleAddCart=(ele,id)=>{
        // console.log(ele)
        
        //  setMsg(false)
          ctx.addData(ele);
           

          let obj={
            _id:ele._id,
            name:ele.name,
            desc:ele.desc,
            price:ele.price,
            qty:`${Number(ele.qty)-1}`
          };

        //   console.log(obj)
          MyPost(obj,id);
        
    };

    const MyPost= async(obj,id)=>{
       await axios.put(`https://crudcrud.com/api/3c7f056389434a819fa9cfd02416032b/data/${Number(id)}`,obj)
          .then((res)=>{
            console.log(res)
               setCheck(res.data);
          })
          .catch((err)=>{
            console.log(err)
          })
    }


     useEffect(() => {
        axios.get("https://crudcrud.com/api/3c7f056389434a819fa9cfd02416032b/data")
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
                return <li key={ele._id}>{`${ele.name}-${ele.desc}-${ele.price}-qty:${msg?"out of stock":ele.qty}`}<button onClick={()=>handleAddCart(ele,ele._id)}>Add to bill</button></li>
            })
        }
      </ul>
    </div>
  )
}

export default Product
