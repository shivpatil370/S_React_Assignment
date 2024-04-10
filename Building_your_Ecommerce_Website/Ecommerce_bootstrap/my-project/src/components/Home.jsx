// import React from 'react'
import {Button} from "react-bootstrap";

const Home = () => {

      let products=[
        {id:1, day:"JUL16", name:"DETROIT, MI", location:"DTE ENERGY MUSIC THEATRE"},
        {id:2, day:"JUL19", name:"TORONTO,ON", location:"BUDWEISER STAGE"},
        {id:3, day:"JUL22", name:"BRISTOW, VA", location:"JIGGY LUBE LIVE"},
        {id:4, day:"JUL29", name:"PHOENIX, AZ", location:"AK-CHIN PAVILION"},
        {id:5, day:"AUG2", name:"LAS VEGAS, NV", location:"T-MOBILE ARENA"},
        {id:6, day:"AUG7", name:"CONCORD, CA", location:"CONCORD PAVILION"}
      ]


  return (
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
