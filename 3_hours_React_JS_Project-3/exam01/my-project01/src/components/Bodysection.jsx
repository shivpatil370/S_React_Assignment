// import React from 'react'
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import AppContext from "./context-api";

const Bodysection = ({setIsModal}) => {
    const [students,setStudents]=useState([]);

     const ctx=useContext(AppContext);

    useEffect(()=>{
        axios.get("https://crudcrud.com/api/3de49481edd0436890824a43ecc83d14/datas")
          .then((res)=>{
            setStudents(res.data)
            ctx.addTotal(res.data.length);
            // console.log(res.data)
          })
    },[ctx.data]);


    const handleDelete=(id)=>{
        console.log(id)
        axios.delete(`https://crudcrud.com/api/3de49481edd0436890824a43ecc83d14/datas/${id}`)
        .then((res)=>{
            // console.log(res);
            ctx.addData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    const handleEdit=(ele)=>{
        // console.log(ele)
        ctx.addEditData(ele);
        setIsModal(true)
    };


  return (
    <div style={{margin:"5rem 1rem 0 1rem",borderTop:"1px solid lightgray"}}>
      <h2 style={{marginTop:"1rem",textAlign:"center"}}>All Students</h2>
       <ul>
          {
            students.map((ele)=>{
                return <li style={{listStyle:"none",fontWeight:"bold",border:"1px solid lightgray",marginBottom:"0.5rem",padding:"0.5rem",backgroundColor:"lightgray"}} key={ele._id}>{`${ele.name}-${ele.num}-${ele.add}-`}<button onClick={()=>handleDelete(ele._id)} style={{backgroundColor:"#f44336",color:"white",border:"none",padding:"0.3rem",borderRadius:"5px"}}>Delete</button>-<button onClick={()=>handleEdit(ele)} style={{backgroundColor:"#04aa6d",color:"white",border:"none",padding:"0.3rem",borderRadius:"5px"}}>Edit</button></li>
            })
          }
       </ul>
    </div>
  )
}

export default Bodysection
