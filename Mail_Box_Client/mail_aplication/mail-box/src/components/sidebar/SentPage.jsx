import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authActions } from '../redux-store/AuthSlice';


let stars=<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="8"/>
</svg>
      

const SentPage = () => {
  const [mailData,setMailData]=useState({});
  // console.log(mailData)
      const dispatch=useDispatch();

  


    useEffect(()=>{
          fetch(`https://mail-box-api-default-rtdb.firebaseio.com/sentbox.json`)
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
          })
    },[]);


    useEffect(()=>{
      // let totalAllInbox=0;
      let inboxNewTotal=0;
    Object.entries(mailData).map(([key,ele])=>{
  //    if(key){
  //     totalAllInbox++;
  //   }
    if(ele.isNotReadMail){
       inboxNewTotal++;
    }
  });
  // console.log(totalAllInbox);
  dispatch(authActions.totalSentBox(inboxNewTotal))
  // console.log(inboxNewTotal)
    })

  return (

    <div className='me-2'>

<div className='d-flex justify-content-between mt-2 ms-2 me-2'>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
      </div>
      <div>
        <p>Sent</p>
      </div>
      </div>

      {/* ............................................ */}

      
      {
        Object.entries(mailData).map(([key,ele])=>{
                // console.log(ele.todayDate);
                // console.log(ele.isNotReadMail);
                

          let newStr;
          let maxLength=55;
          if(ele.subject.length > maxLength) {
              newStr = ele.subject.substring(0, maxLength) + "...";
          } else {
              newStr = ele.subject;
          }
          return <NavLink to={`/sentmail/readsentmail/${key}`} ><div key={key} className='d-flex border-bottom-0 text-dark pt-1 pb-1' style={ele?.isNotReadMail?{backgroundColor:"lightgray"}:{}}>
               
                  <div className='d-flex gap-2 align-content-center justify-content-start ps-2'>
                     <span><input type='checkbox'></input></span>
                     {ele?.isNotReadMail&&<span className='text-success'>{stars}</span>}
                     <span>To:{ele.to}</span>
                   </div>

                   <div className='position-fixed start-50'>
                    <span>{newStr}</span>
                   </div>
                    
                    <div className='position-fixed end-0'>
                      <p className='pe-2'>{ele?.todayDate}</p>
                    </div>
                   
          </div></NavLink>
        })
      }
    </div>
  )
}

export default SentPage