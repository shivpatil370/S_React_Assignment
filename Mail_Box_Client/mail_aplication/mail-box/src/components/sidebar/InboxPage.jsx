// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authActions } from '../redux-store/AuthSlice';
import { ColorRing } from 'react-loader-spinner';

let stars=<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="8"/>
</svg>


const InboxPage = () => {
  let x=localStorage.getItem("token");
const [mailData,setMailData]=useState(null);
const mail=localStorage.getItem("email")||"";
  const [email,setEmail]=useState(mail);
  const [abc,setAbc]=useState("");
  const [err,setErr]=useState(true);

// console.log(abc)
  // const renders=useSelector(store=>store.auth.render);
const dispatch=useDispatch()
    // console.log(mailData)

  
  dispatch(authActions.login(x));


    
      const emailid = email;
      const cleanedEmail = emailid.replace(/[@.]/g, '');
      // console.log(cleanedEmail); 
  
      useEffect(()=>{
        setErr(true);
            const timer=setInterval(()=>{
              fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/inbox.json`)
              .then((res)=>{
                  if(res.ok){
                    return res.json().then((data)=>{
                      // console.log(data)
                      setMailData(data || {})
                      dispatch(authActions.renderdata(data));
                      setErr(false)
                    })
                  }
                  else{
                    return res.json().then((err)=>{
                      console.log(err)
                    })
                  }
              })
            },6000);

            setAbc("");
            
            return ()=>{
              clearInterval(timer);
            }
      },[abc,cleanedEmail]);



      useEffect(()=>{
       
        let inboxNewTotal = 0;
        // Check if mailData is an object before mapping
        
        let time=  setInterval(()=>{
           if (mailData && typeof mailData === 'object') {

             Object?.entries(mailData).forEach(([key, ele]) => {
               if (ele?.isNotReadMail) {
                 inboxNewTotal++;
               }
             });
             
             
            }
            dispatch(authActions.totalInbox(inboxNewTotal));
          },6000);

        return ()=>{
          clearInterval(time);
        }
      },[mailData])
  
      console.log(mailData)


  return err? <span className='d-flex justify-content-center mt-5'> <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    /></span>:!mailData?<h1>inbox empty</h1>:(
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
                         <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-down" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg></span>
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