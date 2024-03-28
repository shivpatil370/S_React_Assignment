// import React from 'react'
import { useContext, useEffect, useState } from "react";
import styles from "./AllBookMarks.module.css";
import axios  from "axios";
import BookCartContext from "../context-api/BookContext";

const AllBookMarks = ({onSetModal}) => {
    const [allBooks,setAllBooks]=useState([]);
    const ctx=useContext(BookCartContext);
    const [check,setCheck]=useState([])
// console.log(ctx);

// DELETE FUNCTIONALITY=>
const handleDelete=(ele,id)=>{
    axios.delete(`https://crudcrud.com/api/5d394bb9d3e9433ab7cde044827ea88c/data/${id}`)
    .then((res)=>{
        setCheck(res.data)

    })
}


// EDIT FUNCTIONALLITY=>
  const handleEdit=(ele,id)=>{
      ctx.getEditId=id
      onSetModal(true)
  }



     useEffect(() => {
        
        axios.get("https://crudcrud.com/api/5d394bb9d3e9433ab7cde044827ea88c/data")
        .then((res)=>{
            setAllBooks(res.data);
        })

     }, [ctx.render,check])

  return (
    <div className={styles.box}>
         <h1>All Bookmarks</h1>
         <ul>
           {
            allBooks?.map((ele)=>{
                return <li key={ele._id}>{`${ele.name} > ${ele.link}`} <button onClick={()=>handleDelete(ele,ele._id)}>Delete</button><button onClick={()=>handleEdit(ele,ele._id)}>Edit</button></li>;
            })
           }
         </ul>
    </div>
  )
}

export default AllBookMarks
