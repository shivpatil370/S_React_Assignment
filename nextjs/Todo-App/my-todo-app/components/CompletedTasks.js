"use client"

import Link from "next/link";
import { redirect } from "next/navigation";

export async function getData(){

    const res=await fetch("http://localhost:8080/todos");

    if(!res.ok){
        throw new Error(res.statusText);
    }
    else{

        const data=await res.json();
        return await data;
    }

};

export default async function CompletedTasks(){
    
    // const res=await fetch("http://localhost:8080/todos");
    // const todo=await res.json();
    const todo=await getData();
// console.log(todo);

    // function handleEdit(ele){
        // fetch("http://localhost:8080/todos",{
        //     method:"PATCH",
        //     headers:{ 
        //         "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify()
        // })
        
        // <Link href={`/today/${ele.id}`}/>
        
//    }
 

    return(
        <main style={{textAlign:"center"}}>
        <h1>Completed Tasks!</h1>
         
         <ul>
             {
                todo?.map((ele)=>{
                  return <li style={{color:"red", marginBottom:"2rem"}} key={ele?.id}><input type="radio" />{ele?.description} <button onClick={()=>redirect(`/today/${ele.id}`)}>edit</button></li>
                })
             }
         </ul>
        </main>
    )
};




// export const revalidate=5;