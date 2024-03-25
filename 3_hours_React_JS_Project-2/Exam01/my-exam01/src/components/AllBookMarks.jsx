// import React from 'react'
import { useContext, useEffect, useState } from "react";
import styles from "./AllBookMarks.module.css";
import axios from "axios"
import FormContext from "../contextApi/form-context";

const AllBookMarks = ({setIsModal}) => {
  const ctx=useContext(FormContext)
const [detas,setDetas]=useState([]);
const [check,setCheck]=useState([])


const handleDelete=async (ele)=>{
  //  console.log(ele.id)
   await axios.delete(`http://localhost:3000/data/${ele.id}`)
    .then((res)=>{
        setCheck(res.data)
    })
};

const handleEdit=(ele)=>{
  ctx.editId=(ele.id);
  // console.log(ele.id)
  setIsModal(true);
}


   useEffect(() => {
   axios.get("http://localhost:3000/data")
   .then((res)=>{
    return setDetas(res.data)
   })
   }, [ctx.data,check])

  return (
    <div className={styles.container}>
        <h2>All Bookmarks</h2>
         <ul>
            {
              detas?.map((ele)=>{
                return <li key={ele.id}>{`${ele.book}-${ele.links}`}<button onClick={()=>{
                  return handleDelete(ele)
                }}>Delete</button><button onClick={()=>{
                  return handleEdit(ele)
                }}>Edit</button></li>
              })
            }
         </ul>
    </div>
  )
}

export default AllBookMarks
