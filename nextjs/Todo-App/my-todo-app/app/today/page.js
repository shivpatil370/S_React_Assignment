"use client";

import { useState } from "react";
import { handleSubmit } from "@/components/FormData";


export default function Today_Task(){
    const [des,SetDes]=useState("")

    

    return(
        <main style={{textAlign:"center"}}>
        <span><h1>Today</h1> <p>Sat/20-may</p></span>

        <form action={handleSubmit}>
        <input name="desc" placeholder="task name" value={des} onChange={(e)=>SetDes(e.target.value)}/>
        <br></br>
        <button>cancel</button>
        <button type="submit">add</button>
        </form>

        </main>
    )
}