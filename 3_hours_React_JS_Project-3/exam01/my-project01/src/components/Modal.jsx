// import React from 'react'
import { useContext, useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import {createPortal} from "react-dom";
import axios from "axios";
import AppContext from "./context-api";



const Modal = ({setIsModal}) => {
    const nameRef=useRef();
    const numRef=useRef();
    const addRef=useRef();

    const ctx=useContext(AppContext);
    // console.log(ctx)


    const ModalClose=async()=>{
        await setIsModal(false)
     }

     const handleSubmit=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const num=numRef.current.value;
        const add=addRef.current.value;
        
        const obj={
            name:name,
            num:num,
            add:add,
        };
        // console.log(obj)

            if(ctx.editdata){
                // EDIT
                axios.put(`https://crudcrud.com/api/3de49481edd0436890824a43ecc83d14/datas/${ctx.editdata._id}`,{
                  name:obj.name,
                  num:obj.num,
                  add:obj.add,
                })
                .then((res)=>{
                  // console.log(res.data)
                  ctx.addData(res.data);
                  nameRef.current.value="",
                  numRef.current.value="",
                  addRef.current.value="",
                  ctx.addEditData("");
                    ModalClose()
                });
            }
            else{

              axios.post("https://crudcrud.com/api/3de49481edd0436890824a43ecc83d14/datas",obj)
              .then((res)=>{
                // console.log(res.data)
                ctx.addData(res.data);
                nameRef.current.value="",
                numRef.current.value="",
                addRef.current.value="",
                ctx.addEditData("");
                  ModalClose()
              });
            }

        
     };


  
      
      useEffect(()=>{
        if(ctx.editdata){
          nameRef.current.value=ctx.editdata.name,
          numRef.current.value=ctx.editdata.num,
          addRef.current.value=ctx.editdata.add
        }
        // console.log(ctx.editdata)
     },[ctx.editdata]);



     

  return createPortal(
    <div className={styles.box}>
       <div onClick={()=>setIsModal(false)} className={styles.top}>

       </div>

       <div className={styles.bottom}>
              <form onSubmit={handleSubmit}>
                  <label id="name">Name:</label>
                  <input id="name" type="text" ref={nameRef}/>

                  <label id="num">Mobile:</label>
                  <input id="num" type="number" ref={numRef}/>

                  <label id="add">Address:</label>
                  <input id="add" type="text" ref={addRef}/>

                  <button>Add</button>
                  <button type="submit" onClick={()=>setIsModal(false)}>close</button>
              </form>
       </div>
    </div>,
    document.querySelector(".modalLocation")
  )
}

export default Modal
