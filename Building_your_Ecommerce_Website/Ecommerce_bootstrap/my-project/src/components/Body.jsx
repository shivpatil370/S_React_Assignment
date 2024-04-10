// import React from 'react'

import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./Body.module.css";
import { useContext } from "react";
import AppContext from "../context-api/CartContext";

const Body = () => {

    const ctx=useContext(AppContext);

    const productsArr = [

        {
        id:1,
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        qty:1
        
        },
        
        {
        id:2,
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        qty:1
        
        },
        
        {
        id:3,
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        qty:1
        
        },
        
        {
        id:4,
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        qty:1
        
        }
        
        ]


  return (
      <div className="box bg-dark">
        <header style={{background:"rgb(119,119,119)"}} className="header w-100">
            <h1 style={{textAlign:"center", color:"white", padding:"0.1rem 0 3rem 0", fontSize:"5rem", fontFamily:"-moz-initial", fontWeight:"bolder"}}>The Generics</h1>
        </header>
         
        

         <main>
             <div className="box ms-5 me-5">
                 <Card.Title as="h2" className="text-light text-center mt-5 font-monospace">MUSIC</Card.Title>
                 <Row className="justify-content-md-center">
                    {
                      productsArr.map((ele)=>{
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
