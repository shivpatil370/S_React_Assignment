// import React from 'react'
import styles from "../sidebar/SidebarMenu.module.css";
import { NavLink } from "react-router-dom";
import "./SidebarMenu.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SidebarMenu = () => {
  const mail=localStorage.getItem("email")||'';
  const [email,setEmail]=useState(mail);
  const [mailData,setMailData]=useState({});
  const [sentMailData,setSentMailData]=useState({});
  const totalinbox=useSelector(store=>store?.auth?.totalInboxItems);
  const [totals,setTotals]=useState(totalinbox)
  const totalSentbox=useSelector(store=>store?.auth?.totalSentBoxItems);
  const [totalSent,setTotalSent]=useState(totalSentbox);

  const renders=useSelector(store=>store.auth.render);

  const totalsentboxs=useSelector(store=>store.auth.totalSentBoxItems);
  // console.log(renders)

  const emailid = email;
  const cleanedEmail = emailid.replace(/[@.]/g, '');
  // console.log(cleanedEmail); 
  useEffect(()=>{

    let timer=setInterval(()=>{

      fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/inbox.json`)
      .then((res)=>{
          if(res.ok){
            return res.json().then((data)=>{
              // console.log(data)
              setMailData(data)
            })
          }
          else{
            return res.json().then((err)=>{
              console.log(err)
            })
          }
      });

    },2000);

    return ()=>{
      clearInterval(timer);
    }
},[renders]);

//.....................................SENT-BOX....................................

useEffect(()=>{

  let time=setInterval(()=>{

    fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/sentbox.json`)
    .then((res)=>{
        if(res.ok){
          return res.json().then((data)=>{
            // console.log(data)
            setSentMailData(data)
          })
        }
        else{
          return res.json().then((err)=>{
            console.log(err)
          })
        }
    })

  },2000);

  return ()=>{
    clearInterval(time);
  }
},[renders,totalsentboxs]);

useEffect(()=>{
       
  // let totalAllInbox=0;
  let inboxNewTotal=0;
  mailData&&Object.entries(mailData).map(([key,ele])=>{
//    if(key){
//     totalAllInbox++;
//   }
if(ele?.isNotReadMail){
   inboxNewTotal++;
}
});
// console.log(totalAllInbox);
setTotals(inboxNewTotal);
// console.log(inboxNewTotal);

},[mailData]);


// ........................sentbox...........................
useEffect(()=>{
       
  // let totalAllInbox=0;
  let inboxNewTotal1=0;
  sentMailData&&Object.entries(sentMailData).map(([key,ele])=>{
//    if(key){
//     totalAllInbox++;
//   }
if(ele.isNotReadMail){
   inboxNewTotal1++;
}
});
// console.log(totalAllInbox);
setTotalSent(inboxNewTotal1);

// console.log(inboxNewTotal);

},[sentMailData])


  return (
    <div>
        <ul className="list-unstyled">
        <NavLink to={"/"} style={{color:"black",textDecoration:"none"}}><li  style={{padding:"0.1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",paddingLeft:"1.4rem",display:"flex"}} className={styles.hvr}>
                <div className="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-inbox" viewBox="0 0 16 16">
  <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
</svg>
                </div>
                Inbox
                 {totals>0&&<span className="ms-1 border-0 ps-2 pe-2 bg-info rounded-5"><span className="text-danger text-decoration-none">new </span>{totals}</span>}
                </li></NavLink>

                <li style={{padding:"0.1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",paddingLeft:"1.4rem",display:"flex"}} className={styles.hvr}>
                <div className="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
                </div>
                Starred</li>
                <li style={{padding:"0.1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",paddingLeft:"1.4rem",display:"flex"}} className={styles.hvr}>
                <div className="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
                </div>
                Snoozed</li>
                <NavLink to={"/sentmail"} style={{color:"black",textDecoration:"none"}}><li style={{padding:"0.1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",paddingLeft:"1.4rem",display:"flex"}} className={styles.hvr}>
                <div className="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
                </div>
                Sent 
                {totalSentbox>0&&<span className="ms-1 border-0 ps-2 pe-2 bg-info rounded-5"><span className="text-danger text-decoration-none">new </span>{totalSent}</span>}
                </li></NavLink>

                <li style={{padding:"0.1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",paddingLeft:"1.4rem",display:"flex"}} className={styles.hvr}>
                <div className="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>
                </div>
                Draft</li>
                <li style={{padding:"0.1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",paddingLeft:"1.4rem",display:"flex",fontSize:"bold"}} className={styles.hvr}>
            <div className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
                </div>
                More</li>
        </ul>

        <h6 style={{paddingLeft:"1.4rem"}}>Labels</h6>
    </div>
  )
}

export default SidebarMenu