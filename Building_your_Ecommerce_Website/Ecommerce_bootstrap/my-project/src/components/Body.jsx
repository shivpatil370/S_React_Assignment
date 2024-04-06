// import React from 'react'

import { Button, Card, CardBody, CardGroup, Col, Container, Row } from "react-bootstrap"

const Body = () => {

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
         <Container fluid>
            <h1 style={{textAlign:"center",color:"white"}}>MUSIC</h1>
            <Row  xs={1} md={2} className="row w-75 m-auto">
              {
                productsArr.map((ele,index)=>{
                      return <Col key={index} sm={12} md={6} className="col mb-5">
                            <div className="card p-3 bg-dark" >
                              <h3 style={{color:"white"}}>{ele.title}</h3>
                              <img style={{margin:"1rem 0 1rem 0",width:'50%'}} src={ele.imageUrl} alt={ele.title}/>
                              <div className="div d-flex">
                              <h3 style={{color:"white"}}>${ele.price}</h3>
                              <Button className="btn ms-4">ADD TO CART</Button>
                              </div>
                            </div>
                        </Col>
                })
              }
              
               
            </Row>
            <Button style={{display:"flex",margin:"auto",background:"none",border:"none",color:"skyblue"}}>See the cart</Button>
        </Container>
         </main>

         <footer style={{background:"rgb(14,133,170)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 3rem 0 3rem"}}>
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
