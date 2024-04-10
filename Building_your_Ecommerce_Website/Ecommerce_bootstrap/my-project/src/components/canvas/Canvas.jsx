// import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button,Card } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import AppContext from '../../context-api/CartContext';

const Canvas = ({show,setShow}) => {

    const ctx=useContext(AppContext)

    const handleClose = () =>{
       setShow(false);
       ctx.setShow(false);

    }

    // .......................................
      useEffect(()=>{
        setShow(ctx.Show);
      },[ctx.Show])


  return (
    <div>
         <Offcanvas show={show} onHide={handleClose}  placement="end" className="mt-5" scroll>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='canva position-relative ms-auto' style={{color:"gray",fontFamily:"-moz-initial",fontWeight:"bolder"}}>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
             <Card style={{border:"none"}}>
              <div className="d-flex justify-content-between ps-3 pe-3">
                  <Card.Title style={{color:"darkgray",fontFamily:"-moz-initial",textDecoration:"underline"}}>ITEM</Card.Title>
                  <Card.Title style={{color:"darkgray",fontFamily:"-moz-initial",textDecoration:"underline"}}>PRICE</Card.Title>
                  <Card.Title style={{color:"darkgray",fontFamily:"-moz-initial",textDecoration:"underline"}}>QUANTITY</Card.Title>
              </div>
              {
                ctx.data.map((ele)=>{
                    return <Card key={ele.id} className='mb-1'>
                        <div className="d-flex justify-content-between ps-3 pe-3">
                    <Card.Title style={{color:"gray",fontFamily:"initial"}}>{ele.title}</Card.Title>
                    <Card.Title style={{color:"gray",fontFamily:"initial"}}>${ele.price}</Card.Title>
                    <Card.Title style={{color:"gray",fontFamily:"initial"}}>{ele.qty}</Card.Title>
                </div>
                </Card>
                })
              }
              <div className='d-flex justify-content-end me-3'>
                <Card.Title style={{color:"gray",fontFamily:"-moz-initial"}}>Total:</Card.Title> <Card.Title style={{color:"gray",fontFamily:"-moz-initial"}}>${ctx.totalPrice}</Card.Title>
              </div>
             </Card>
        <Button className='d-flex m-auto'>PURCHASE</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Canvas
