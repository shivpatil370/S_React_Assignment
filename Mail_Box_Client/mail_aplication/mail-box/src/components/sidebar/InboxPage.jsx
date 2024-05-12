// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authActions } from '../redux-store/AuthSlice';


let stars=<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="8"/>
</svg>


const InboxPage = () => {
const [mailData,setMailData]=useState(null);
const mail=localStorage.getItem("email")||"";
  const [email,setEmail]=useState(mail);
  const [abc,setAbc]=useState("")
// console.log(abc)
  // const renders=useSelector(store=>store.auth.render);
const dispatch=useDispatch()
    // console.log(mailData)


    
      const emailid = email;
      const cleanedEmail = emailid.replace(/[@.]/g, '');
      // console.log(cleanedEmail); 
  
      useEffect(()=>{
            fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/inbox.json`)
            .then((res)=>{
                if(res.ok){
                  return res.json().then((data)=>{
                    // console.log(data)
                    setMailData(data || {})
                    dispatch(authActions.renderdata(data))
                  })
                }
                else{
                  return res.json().then((err)=>{
                    console.log(err)
                  })
                }
            })
      },[abc,cleanedEmail]);



      useEffect(()=>{
       
        let inboxNewTotal = 0;
        // Check if mailData is an object before mapping
        if (mailData && typeof mailData === 'object') {
          Object?.entries(mailData).forEach(([key, ele]) => {
            if (ele?.isNotReadMail) {
              inboxNewTotal++;
            }
          });
          dispatch(authActions.totalInbox(inboxNewTotal));
        }
      },[mailData])
  


  return !mailData?<h1>Opps,empty inbox!</h1>:(
    <div className='me-2'>

    <div className='d-flex justify-content-between mt-2 ms-2 me-2'>
          <div>
            <span title='refresh' onClick={()=>setAbc("rerender deta")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
    </svg>
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
    </svg>
          </div>
          <div>
            <p>inbox</p>
          </div>
          </div>
    
          {/* ............................................ */}
    
          
          {
            mailData&&Object.entries(mailData).map(([key,ele])=>{
                // console.log(ele?.todayDate);
                // console.log(ele?.isNotReadMail);
              let newStr;
              let maxLength=55;
              if(ele?.subject.length > maxLength) {
                  newStr = ele?.subject.substring(0, maxLength) + "...";
              } else {
                  newStr = ele?.subject;
              }
              return <NavLink to={`/inbox/readinboxmail/${key}`} key={key}><div className='d-flex mt-2 mb-2 border-bottom-0 text-dark pt-1 pb-1' style={ele?.isNotReadMail?{backgroundColor:"lightgray"}:{}}>
                   
                      <div className='d-flex gap-2 align-content-center justify-content-start ps-2'>
                         <span><input type='checkbox'></input></span>
                         {ele?.isNotReadMail&&<span className='text-success'>{stars}</span>}
                         <span>From: {ele?.to}</span>
                       </div>
    
                       <div className='position-fixed start-50'>
                        <span>{newStr}</span>
                       </div>
                        
                        <div className='position-fixed end-0'>
                          <p className='pe-4'>{ele?.todayDate}</p>
                        </div>
                       
              </div></NavLink>
            })
          }
        </div>
  )
}

export default InboxPage