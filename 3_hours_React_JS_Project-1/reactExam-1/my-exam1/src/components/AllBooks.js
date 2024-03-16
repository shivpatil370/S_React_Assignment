import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import styles from "./AllBooks.module.css";

const AllBooks = ({setAlldatacount,getSerchtext,setShowing}) => {
    const [data,setData]=useState([]);
    const [fdeta,setFdeta]=useState([]);
    const titleRef=useRef();
    const deseRef=useRef();

    const Myfilter=async (data)=>{
        const filterddata= await data?.filter((ele)=>{
            return ele.title.toLowerCase().includes(getSerchtext.toLowerCase())
        });
        // console.log(fdata)
        setFdeta(filterddata);
        setShowing(filterddata.length);
    };
    
   

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(titleRef.current.value, deseRef.current.value)
        const currentTitle=titleRef.current.value;
        const currentDese=deseRef.current.value;

        let obj={id:Math.random(), title:currentTitle, desc:currentDese};
        const newData=JSON.parse(localStorage.getItem("items"))||[];
        newData.push(obj);
        localStorage.setItem("items",JSON.stringify(newData));
        setAlldatacount(newData.length)
 
      setData(newData);
        
      titleRef.current.value="";
      deseRef.current.value="";
    }
    
    // console.log(data)

    
    useEffect(()=>{
        Myfilter(data);
    },[getSerchtext,data])
    
    useEffect(()=>{
        const newData=JSON.parse(localStorage.getItem("items"))||[];
        setData(newData)
        setAlldatacount(newData.length);
    },[]);

    const handleDelete=(e)=>{
         let parent=(e.target.parentElement);
         let getid=Number(parent.getAttribute("id"));
        //  console.log(getid)
        if(getid){
            let filterData=data.filter((ele)=>{
                // console.log(getid,ele.id)
                return ele.id!==getid;
            });
            localStorage.setItem("items",JSON.stringify(filterData));
            const newData=JSON.parse(localStorage.getItem("items"))||[];
            localStorage.setItem("items",JSON.stringify(newData));
            setAlldatacount(newData.length)
            setData(filterData);
        }
//    console.log(filterData)

    };


  return (
    <>
    <div className={styles.box}>
        <form onSubmit={handleSubmit}>
       <label for="note">Note Title:</label>
       <input id='note' type='text' ref={titleRef} required/>
       <br></br>
       <label for="dese">Note Dese:</label>
       <input id='dese' type='text' ref={deseRef} required/>
       <br></br>
       <button type='submit'>Add To Book</button>
       </form>
    </div>
     <div>
        <div className={styles.da}>
            {
                fdeta?.map((ele)=>(
                    <div key={ele.id} id={ele.id}>
                        <h3>{ele.title}</h3>
                        <p>{ele.desc}</p>
                        <button onClick={handleDelete}>DELETE</button>
                    </div>
                ))
            }
        </div>
     </div>
    </>
  )
}

export default AllBooks
