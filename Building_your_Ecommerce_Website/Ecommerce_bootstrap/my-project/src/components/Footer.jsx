import React from 'react'

const Footer = () => {
  return (
    <div>
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

export default Footer
