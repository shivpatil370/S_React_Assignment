// import React from 'react'

import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./Body.module.css";

const Body = ({setShow}) => {

    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
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
                      productsArr.map((ele,index)=>{
                         return <Col key={index} sm={6}>
                                    <Card className="d-inline bg-dark text-bg-danger text-center">
                                        <Card.Title as="h3">{ele.title}</Card.Title>

                                       
                                        <Card.Img variant="top" className="img-fluid w-50 d-lg-flex m-auto mb-4 mt-4" src={ele.imageUrl} alt={ele.title}/>
                                      

                                        <div className="d-flex w-50 justify-content-between m-auto">
                                        <Card.Text as="h4">${ele.price}</Card.Text>
                                        <Button>ADD TO CART</Button>
                                        </div>
                                    </Card>
                                </Col>
                      })
                    }
                 </Row>

                 <Button onClick={()=>setShow(true)} style={{background:"gray", border:"none",display:"flex",margin:"auto",marginBottom:"4rem",marginTop:"2rem",color:"skyblue"}}>See the cart</Button>

             </div>
         </main>

         <footer style={{background:"rgb(14,133,170)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 6rem 0 6rem"}}>
             <div className="foot ">
             <h1 style={{color:"white", padding:"2rem 0 2rem 0", fontSize:"3rem", fontFamily:"-moz-initial", fontWeight:"bolder"}}>The Generics</h1>
             </div>

             <div style={{display:"flex",gap:"2rem"}}>
                  <h3 style={{color:"white"}}>utube</h3>
                  <h3 style={{color:"white"}}>spotify</h3>
                  <h3 style={{color:"white"}}>fb</h3>
             </div>
         </footer>
          
    </div>
  )
}

export default Body
