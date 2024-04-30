// import React from 'react'

import { Button, Card, Col, Row, Badge } from "react-bootstrap";
import styles from "./Body.module.css";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context-api/CartContext";
import { ColorRing } from 'react-loader-spinner'

const Body = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [err, setErr]=useState(false);
    const [time,setTime]=useState(5);
    const [deta,setDeta]=useState([]);
    // const [data,setData]=useState([]);
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



      },[err]);


      useEffect(()=>{
        let mail=ctx.UserMail.replace(/[@.]/g,"");
           fetch(`https://crudcrud.com/api/d41467106ee54d15a31a769d63e9f811/cart${mail}`)
          .then((res)=>{
            return res.json();
          })
          .then((detas)=>{
          //  console.log(detas)
            setDeta(detas);
          })
         
      },[ctx.data]);

      


      const MyFun=async (useremailid,ele)=>{
         try {

          const res=await fetch(`https://crudcrud.com/api/d41467106ee54d15a31a769d63e9f811/cart${useremailid}`,{
          method:"POST",
          body:JSON.stringify(ele),
          headers:{
            "Content-Type":"application/json"
          }
        })
          const datas=await res.json();
          // console.log(datas);
          ctx.addData(datas)
          let qty=deta.reduce((acc,ele)=>Number(acc)+(Number(ele.qty)),0);
          ctx.CartTotal(qty)
    // console.log(qty);
          // setDeta(datas);
         } catch (error) {
             console.log(error)
         }
      };

      const MyFunCrud=async (useremailid,newdata,id)=>{
           console.log(useremailid,newdata,id);
        try {

         const res=await fetch(`https://crudcrud.com/api/d41467106ee54d15a31a769d63e9f811/cart${useremailid}/${id}`,{
         method:"PUT",
         body:JSON.stringify({
           id:newdata.id,
           title:newdata.title,
           imageUrl:newdata.imageUrl,
           price:newdata.price,
           qty:Number(newdata.qty)
         }),
         headers:{
           "Content-Type":"application/json"
         }
       })
         const datas=await res.json();
        //  console.log(datas);
         ctx.addData(datas)
         let qty=deta.reduce((acc,ele)=>Number(acc)+(Number(ele.qty)),0);
         ctx.CartTotal(qty)
    // console.log(qty);
        //  setDeta(datas);
        } catch (error) {
            console.log(error)
        }
     }
// console.log(deta)
//   ADD CART ITEMS TO db
      const AddtoCartFun=(ele)=>{
        // console.log(ele)
        ctx.addData(ele);
        let emailId=(ctx.UserMail);
        let mail=emailId.replace(/[@.]/g,"");
        // console.log(mail)

           if(mail){ 
            //  console.log(ele)
               let index=deta.findIndex((el)=>el.id==ele.id);
              //  console.log(index)
              const currentIndex=deta[index];
              // console.log(currentIndex)
              if(currentIndex){
                let newdata={
                  ...currentIndex,
                  qty:Number(currentIndex.qty+1)
                }
                // console.log(newdata)
                MyFunCrud(mail,newdata,newdata._id)
              }
              else{

                MyFun(mail,ele)
              }
            
      }
             
      };


      

   useEffect(()=>{
    let qty=deta.reduce((acc,ele)=>Number(acc)+(Number(ele.qty)),0);
    // console.log(qty);
    ctx.CartTotal(qty)
 },[deta])
        


  return loading?(<span style={{display:"flex",justifyContent:"center",marginTop:"2rem",marginBottom:"2rem"}}><ColorRing 
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /></span>):
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
                                      

                                        <div className="d-sm-inline d-md-flex w-50 justify-content-between m-auto">
                                        <Card.Text as="h5">${ele.price}</Card.Text>
                                        <Button onClick={()=>AddtoCartFun(ele)}>ADD TO CART</Button>
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
