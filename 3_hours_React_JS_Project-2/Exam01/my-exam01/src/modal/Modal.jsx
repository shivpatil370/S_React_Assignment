

// import React from 'react'
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios"
import FormContext from "../contextApi/form-context";

const Modal = ({setIsModal}) => {
  const [bname,setBname]=useState("");
  const [lname,setLname]=useState("");
  const [loading,setLoading]=useState(false);
  const ctx=useContext(FormContext);
  // console.log(ctx)
  const booknameRef=useRef();
  const linknameRef=useRef();
// console.log(ctx.editId,bname,lname)


if(ctx.editId){
 
  axios.get(`http://localhost:3000/data/${ctx.editId}`)
  .then((res)=>{
    setBname(res.data.book)
    setLname(res.data.links)
    //  console.log(res)
  })
  .catch((err)=>console.log(err))
  
}

useEffect(() => {
    booknameRef.current.value= bname;
    linknameRef.current.value= lname;
}, [bname,lname])


     const handleSubmit=(e)=>{
        e.preventDefault();
        const book=booknameRef.current.value;
        const links=linknameRef.current.value;

        let obj={
          book:book,
          links:links
        }

        if(ctx.editId){
         
          axios.put(`http://localhost:3000/data/${ctx.editId}`,obj)
          .then((res)=>{
            setLoading(true)
             ctx.data=res.data
             ctx.editId=null;
             setLoading(false)
             Myfun()
          })
          .catch((err)=>{
            console.log(err)
          })
         
        }
        else{

         axios.post("http://localhost:3000/data",obj)
         .then(function (response) {
          //  console.log(response);
            ctx.data=(response.data)
          alert('Book added successfully');
          Myfun()
       })
       .catch(function (error) {       
        console.log(error)
       }) 
      }
    
     };

     const Myfun=async()=>{
       await  setIsModal(false)
     }

     
// console.log(loading)
   

  return  ReactDOM.createPortal(
    <div>
        <div className={styles.inner} onClick={()=> setIsModal(false)}></div>
        {loading?(<h1>Loading...</h1>):<div className={styles.outer}>

             <form onSubmit={handleSubmit}>
                <label htmlFor="name">Book Name:</label>
                <input id="name" type="text" placeholder="book name" ref={booknameRef} required/>

                <label htmlFor="links">Book links:</label>
                <input id="links" type="text" placeholder="add link" ref={linknameRef} required/>
                
                <button type="submit">add button</button>
             </form>
        </div>}
    </div>,
    document.querySelector(".modal-location")
  )
}

export default Modal
