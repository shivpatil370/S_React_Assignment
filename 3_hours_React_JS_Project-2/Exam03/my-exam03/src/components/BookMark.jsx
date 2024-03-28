// import React from 'react'
import styles from "./BookMark.module.css"

const BookMark = ({onSetModal}) => {
  return (
    <div className={styles.box}>
       <h2 style={{textAlign:"center",marginBottom:"1rem"}}>Bookmark Website</h2>
       <button onClick={()=>onSetModal(true)} style={{marginLeft :"25%",background:"rgb(4,170,109)",color:"white",border:"none",padding:"0.5rem 1rem"}}>Add New</button>
    </div>
  )
}

export default BookMark
