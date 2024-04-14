// import React from 'react'

import { useState } from "react";
import { Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form';

const MyButton = ({setFdata,setData}) => {

    const [title,setTitle]=useState("");
    const [openingText,setOpeningText]=useState("");
    const [releaseDate,setReleaseDate]=useState("");

    const postFun=async (obj)=>{
      const res=await fetch("https://react-https-77d73-default-rtdb.firebaseio.com/films.json",{
          method:"POST",
          body:JSON.stringify(obj),
          headers:{
            "Content-Type":"application/json"
          }
        })

          const data=await res.json();
          console.log(data)
          setData(data)
       

        setTitle("")
        setOpeningText("")
        setReleaseDate("")
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        let obj={
            title: title,
            opening_crawl: openingText,
            release_date: releaseDate
        };
        // console.log(obj)

       postFun(obj)

    };




  return (
    <div>

        <div className="w-50 m-auto border p-3 mt-3 mb-3 bg-light">
            <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control size="md" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Opening Text</Form.Label>
        <Form.Control size="md" type="text" value={openingText} onChange={(e)=>setOpeningText(e.target.value)}/>
        </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Realese Date</Form.Label>
        <Form.Control size="md" type="text" value={releaseDate} onChange={(e)=>setReleaseDate(e.target.value)}/>
        <Button className="bg-success d-flex m-auto mt-2" type="submit">Add Movie</Button>
        </Form.Group>

        </Form>
        </div>

      <Button onClick={()=>setFdata(true)} className="d-flex m-auto" type="button">Fetch Movies</Button>
    </div>
  )
}

export default MyButton
