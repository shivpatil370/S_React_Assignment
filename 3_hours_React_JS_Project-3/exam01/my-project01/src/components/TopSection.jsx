// import React from 'react'
import { useContext } from "react"
import AppContext from "./context-api"
import styles from "./TopSection.module.css";

const TopSection = ({setIsModal}) => {

    const ctx=useContext(AppContext);

  return (
    <div className={styles.card} style={{width:"fit-Content",margin:"auto",padding:"1rem",marginTop:"1rem",border:"1px solid yellow"}}>
      <h1 style={{color:"gray"}}>Student Manager</h1>
      <p style={{margin:"1rem 0 1rem 0",textAlign:"center"}}>All Students:<span style={{fontWeight:"bolder",color:"red"}}>{ctx.total}</span></p>
      <button style={{backgroundColor:"#008cba",color:"white",border:"none",padding:"0.3rem",display:"flex",margin:"1rem auto 0 auto",borderRadius:"5px"}} onClick={()=>setIsModal(true)}>ADD NEW STUDENT</button>
    </div>
  )
}

export default TopSection
