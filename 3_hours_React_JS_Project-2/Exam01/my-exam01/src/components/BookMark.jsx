// import React from 'react'
import styles from "./BookMark.module.css";

const BookMark = ({onSetIsModal}) => {
  return (
    <div className={styles.box}>
      <h2>Bookmark Website</h2>
      <button onClick={()=>onSetIsModal(true)}>Add New</button>
    </div>
  )
}

export default BookMark
