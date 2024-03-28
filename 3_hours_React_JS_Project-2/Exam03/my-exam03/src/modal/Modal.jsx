
// import React from 'react'
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
import axios from "axios";
import BookCartContext from "../context-api/BookContext";

const Modal = ({onSetModal}) => {
    const nameRef=useRef();
    const linkRef=useRef();

    const [editname,setEditname]=useState("");
    const [editlink,setEditlink]=useState("");

    const ctx=useContext(BookCartContext);
// console.log(ctx.getEditId)

if(ctx.getEditId){

axios.get(`https://crudcrud.com/api/5d394bb9d3e9433ab7cde044827ea88c/data/${ctx.getEditId}`)
            .then((res)=>{
                setEditname(res.data.name);
                setEditlink(res.data.link);
            })
        };


    const postFun= async (obj)=>{
        try {
           await axios.post("https://crudcrud.com/api/5d394bb9d3e9433ab7cde044827ea88c/data",obj)
        .then((res)=>{
            // console.log(res)
            ctx.render=res.data;
            ModalClose()
        })
        } catch (error) {
            console.log(error)
        }
        
    };


    const putFun= async (obj)=>{
        try {
            await axios.put(`https://crudcrud.com/api/5d394bb9d3e9433ab7cde044827ea88c/data/${ctx.getEditId}`,obj)
         .then((res)=>{
             // console.log(res)
             //  editid(ctx.getEditId)
             ctx.getEditId=null;
             ctx.render=res.data;
             ModalClose()
         })
         } catch (error) {
             console.log(error)
         }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        
        const name=nameRef.current.value;
        const link=linkRef.current.value;
        
        let obj={
            name:name,
            link:link
        };
        // console.log(obj);

        if(ctx.getEditId){
            putFun(obj);
        }
        else{

            postFun(obj);
        }
        
        
    };

    const ModalClose=async ()=>{
        await onSetModal(false)
    };


   
    useEffect(() => {
        nameRef.current.value = editname;
        linkRef.current.value = editlink; 
    }, [editname,editlink])
      

  return (
    <div>
       <div onClick={()=>onSetModal(false)} className={styles.outer}></div>

       <div className={styles.inner}>
          <form onSubmit={handleSubmit}>
             <label htmlFor="name">Book Name:</label>
             <input id="name" type="text" ref={nameRef} required/>

             <label htmlFor="link">Book Link:</label>
             <input id="link" type="text" ref={linkRef} required/>

             <button type="submit">Add Book</button>
          </form>
       </div>

    </div>
  )
}

export default Modal
