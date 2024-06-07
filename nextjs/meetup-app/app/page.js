// "use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import MeetupList from "@/components/meetups/MeetupList";


// const DUMMY_MEETUPS=[
//   {
//     id : "m1",
//     title:"a first meetup",
//     image:"https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0",
//     address:"address 5, city,india",
//     description:"this is first meetup!"
//   },
//   {
//     id : "m2",
//     title:"a second meetup",
//     image:"https://my.alfred.edu/zoom/_images/foster-lake.jpg",
//     address:"address 5, city,india",
//     description:"this is second meetup!"
//   }
// ]

export default async function Home(props) {
      const meetups=await getData();
     
  return (
    <>
    <MeetupList meetups={meetups}/>
    </>
  );
};


export async function getData(){
  const response=await fetch("http://localhost:8080/DUMMY_MEETUPS");
  const data=await response.json();
  
    return  data;
}

export const revalidate = 1 // 3600 means revalidate at most every hour
