// import React from 'react'

import { Button, Card, Col, Row, Badge } from "react-bootstrap";
import styles from "./Body.module.css";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context-api/CartContext";

const Body = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [err, setErr]=useState(false);
    const [time,setTime]=useState(5);
        //  console.log(products)
    const ctx=useContext(AppContext);

    // const productsArr = [

    //     {
    //     id:1,
        
    //     title: 'Colors',
        
    //     price: 100,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    //     qty:1
        
    //     },
        
    //     {
    //     id:2,
        
    //     title: 'Black and white Colors',
        
    //     price: 50,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    //     qty:1
        
    //     },
        
    //     {
    //     id:3,
        
    //     title: 'Yellow and Black Colors',
        
    //     price: 70,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    //     qty:1
        
    //     },
        
    //     {
    //     id:4,
        
    //     title: 'Blue Color',
        
    //     price: 100,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    //     qty:1
        
    //     }
        
    //     ]

    useEffect(()=>{
        fetch("http://localhost:3000/productsArr")
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
        


  return loading?(<h1 style={{color:"orange",textAlign:"center",margin:"3rem 0 3rem 0"}}>Loading...</h1>):
  err?(<h1 style={{color:"red", textAlign:"center",margin:"3rem 0 3rem 0"}}>...Retrying <Badge>{time}</Badge><Button className="bg-danger ms-2" onClick={()=>setErr(false)}>cancel</Button></h1>): (
      <div className="box bg-dark">
        <header style={{background:"rgb(119,119,119)"}} className="header w-100">
            <h1 style={{textAlign:"center", color:"white", padding:"0.1rem 0 3rem 0", fontSize:"5rem", fontFamily:"-moz-initial", fontWeight:"bolder"}}>The Generics</h1>
        </header>
         
        

         <main>
             <div className="box ms-5 me-5">
                 <Card.Title as="h2" className="text-light text-center mt-5 font-monospace">MUSIC</Card.Title>
                 <Row className="justify-content-md-center">
                    {
                      products.map((ele)=>{
                        
                         return <Col key={ele.id} sm={5}>
                                    <Card className="d-inline bg-dark text-bg-danger text-center">
                                        <Card.Title style={{fontStyle:"-moz-initial"}} as="h4">{ele.title}</Card.Title>

                                       
                                        <Card.Img className={styles.img} variant="top" style={{width:"50%",display:"flex",margin:"auto",marginBottom:"1rem", marginTop:"1rem"}} src={ele.imageUrl} alt={ele.title}/>
                                      

                                        <div className="d-flex w-50 justify-content-between m-auto">
                                        <Card.Text as="h5">${ele.price}</Card.Text>
                                        <Button onClick={()=>ctx.addData(ele)}>ADD TO CART</Button>
                                        </div>
                                    </Card>
                                </Col>
                      })
                    }
                 </Row>

                 <div className="pb-5">
                 <Button onClick={()=>ctx.setShow(true)} style={{background:"gray", border:"none",display:"flex",margin:"auto",marginTop:"2rem",color:"skyblue"}}>See the cart</Button>
                 </div>

             </div>
         </main>
          
    </div>
  )
}

export default Body
