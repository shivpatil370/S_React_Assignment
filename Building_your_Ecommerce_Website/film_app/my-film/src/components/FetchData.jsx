// import React from 'react'
import {Button, Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useState } from 'react';


const FetchData = ({fdata,setData,data}) => {
  const [err,setErr]=useState(false);
//    console.log(data)

      useEffect(()=>{
        setErr(false)
        fetch('https://react-https-77d73-default-rtdb.firebaseio.com/films.json')
        .then((res)=>{
            return res.json();
        })
        .then((deta)=>{
            // console.log(deta);

                let arr=[];
            for(let key in deta){
             let ob={ "episode_id":key,
              "title":deta[key].title,
              "opening_crawl":deta[key].opening_crawl,
              "release_date":deta[key].opening_crawl}
              arr.push(ob);
            };

            setData(arr)
        })
        .catch((err)=>{
            setErr(true)
            throw new err("something went wrong!")
        })
      },[data])



         const MyDelete=useCallback ( async (ele)=>{
              
            const res=await fetch(`https://react-https-77d73-default-rtdb.firebaseio.com/films/${ele.episode_id}.json`,{
               method:"DELETE",
             });

             if(!res.ok){
              throw new Error("someyhing went wrong in delete operation!");
             }
             
            //  const data=await res.json();
            //  console.log(data)
             
         },[]);

      const handleDelete=(ele)=>{
        // console.log(ele)
           MyDelete(ele)
      }


  return err?<h1 className="text-center">something went wrong!</h1>:(
    <div>
    
      { fdata&& <section>
        {
            data?.map((ele)=>{
                return <Card key={ele.episode_id} className=" w-75 m-auto p-3 mb-4 mt-2">
                      <Card.Title>{ele.title}</Card.Title>
                      <Card.Text>{ele.opening_crawl}</Card.Text>
                      <Card.Text>{ele.release_date}</Card.Text>
                      <Button onClick={()=>handleDelete(ele)} className="bg-danger w-25">DELETE</Button>
                </Card>
            })
        }
        </section>}
    </div>
  )
}

export default FetchData
