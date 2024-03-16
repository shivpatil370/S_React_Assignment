import React, { useState } from 'react'
import styles from "./NoteBook.module.css";

const NoteBook = ({alldatacount,setGetsearchtext,showing}) => {
const [text,setText]=useState("");
// console.log(text)


const handleChange=(e)=>{
   let val=(e.target.value);
   setText(val);
   setGetsearchtext(val);
}

  return (
    <div className={styles.box}>
      <h1>NoteBook</h1>
      <label>Search Notes:</label>
      <input type='text' value={text} onChange={handleChange}/>
      <p>{`Total Notes:${alldatacount}`}</p>
      <p>{`Showing:${showing}`}</p>
    </div>
  )
}

export default NoteBook
