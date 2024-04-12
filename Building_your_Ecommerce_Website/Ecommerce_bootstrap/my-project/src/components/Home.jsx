// import React from 'react'
import { useEffect, useState } from "react";
import {Button,Badge} from "react-bootstrap";

const Home = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [err, setErr]=useState(false);
  const [time,setTime]=useState(5);

     



      useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=>{
            setLoading(true)
            return res.json();
          })
          .then((data)=>{
            // console.log(data);
            setProducts(data);
            // setLoading(false)
          })
          .catch((err)=>{
            setErr(true)
            console.log(err);
          })
          .finally(()=>{
            setLoading(false)
            // setErr(false)
          })
      },[]);



    
      useEffect(()=>{
                
                if(err==true){

          let timeout=setInterval(()=>{
                    setTime((pre)=>{
                      return Number(pre)-1
                    })
                  },1000);

         let interval=setInterval(()=>{
          //  if(err===true){
             console.log(err)
             window.location.reload()
            // }
            
         },5000);


         return ()=>{
          clearInterval(timeout);
            clearInterval(interval);
         }
        }



      },[err])


  

         

  return  loading?(<h1 style={{color:"orange",textAlign:"center",margin:"3rem 0 3rem 0"}}>Loading...</h1>):
  err?(<h1 style={{color:"red", textAlign:"center",margin:"3rem 0 3rem 0"}}>...Retrying <Badge>{time}</Badge><Button className="bg-danger ms-2" onClick={()=>setErr(false)}>cancel</Button></h1>):
  (
        <div style={{backgroundColor:"rgb(119,119,119)"}}>
         <header style={{background:"rgb(119,119,119)"}} className="header w-100">
            <h1 style={{textAlign:"center", color:"white", padding:"0.1rem 0 3rem 0", fontSize:"5rem", fontFamily:"-moz-initial", fontWeight:"bolder"}}>The Generics</h1>
        </header>
        
         <div className="pb-4">
         <div className="border-black w-25 p-2 bg-dark text-center m-auto" style={{backgroundColor:"rgb(119,119,119)",fontWeight:"bold",fontSize:"1.2rem",color:"darkgray"}}>Get our Latest Album</div>
         <div className="m-auto text-center bg-dark mt-4" style={{fontSize:"3rem",color:"darkgray",width:"5rem",height:"5rem",borderRadius:"50%"}}>{"\u23F5"}</div>
         </div>

         <div className="bg-dark">
         <h1 className="pt-4" style={{textAlign:"center", color:"darkgray", padding:"0.1rem 0 3rem 0", fontSize:"2rem", fontFamily:"-moz-initial", fontWeight:"bolder"}}>TOURS</h1>
(
        <div>
              
                  
                 
              {
                products.map((ele)=>{
                    return <div className="w-75 d-flex justify-content-between m-auto" style={{borderBottom:"1px solid gray",}} key={ele.id}>
                          <span style={{color:"gray",}}>{ele.day}</span><span style={{color:"gray"}}>{ele.name}</span><span style={{color:"gray"}}>{ele.location}</span><Button className="bg-dark border-black" disabled>BUYTICKETS</Button>
                          <hr style={{color:"white"}}></hr>
                    </div>
                })
              }
           </div>
             
         </div>
    </div>
  )
}

export default Home
