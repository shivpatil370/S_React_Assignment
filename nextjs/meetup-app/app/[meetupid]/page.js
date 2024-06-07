"use client";
import MeetupDetails from "@/components/meetups/MeetupDetails";
// import { useState } from "react";
// import { getData } from "../page";




export default async function MeetupDetail({params}){
    // const [data,setData]=useState([]);
    let param=params.meetupid;
    // console.log(param);

   
   let x =await getData();

    // console.log(x);

    const filter=x.find((ele)=>param==ele.id)

    return(
        <MeetupDetails
        image={filter.image}
        title={filter.title}
        address={filter.address}
        description={filter.description}
        />
    )
}

export async function getData(){
    const response=await fetch("http://localhost:8080/DUMMY_MEETUPS");
    const data=await response.json();
    // setData(data);
    return data;
    // console.log(datas)
};