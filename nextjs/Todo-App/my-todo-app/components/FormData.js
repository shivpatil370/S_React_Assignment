"use server";

import { getData, revalidate } from "./CompletedTasks";



export async function handleSubmit(formData){
     const obj={
      description:formData.get("desc")
     };

  //    console.log(obj)
       fetch("http://localhost:8080/todos",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(obj)
       })
       .then((res)=>{
          return res.json();
       })
       .then((data)=>{
          console.log(data);
          getData()
         //  revalidate(1)
         //  SetDes("")
       })
  }