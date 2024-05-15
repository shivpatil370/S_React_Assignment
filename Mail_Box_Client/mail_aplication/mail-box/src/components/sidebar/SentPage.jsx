import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authActions } from '../redux-store/AuthSlice';
import { ColorRing } from 'react-loader-spinner';


let stars=<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="8"/>
</svg>
      

const SentPage = () => {
  const [mailData,setMailData]=useState({});
  const mail=localStorage.getItem("email")||"";
  const [email,setEmail]=useState(mail);
  const [err,setErr]=useState(true);
  // console.log(mailData)
      const dispatch=useDispatch();
      const renders=useSelector(store=>store.auth.render)
      const [abc,setAbc]=useState("");
      const emailid = email;
      const cleanedEmail = emailid.replace(/[@.]/g, '');
      // console.log(cleanedEmail); 

    useEffect(()=>{
    //  const timer= setInterval(()=>{
      console.log('working...')
        setErr(true)
            fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/sentbox.json`)
            .then((res)=>{
                if(res.ok){
                  return res.json().then((data)=>{
                    // console.log(data)
                    // if(data){
  
                      setMailData(data);
                      setErr(false);
                      setAbc("")
                    // }
                    // else{
                    //   setMailData([])
                    // }
                  })
                }
                else{
                  return res.json().then((err)=>{
                    console.log(err)
                  })
                }
            });

      // },6000);

      // return ()=>{
      //   clearInterval(timer);
      // }
      
    },[abc,renders]);


    useEffect(()=>{
      // let totalAllInbox=0;
      let inboxNewTotal=0;
      if(mailData ){ 
      mailData&&Object.entries(mailData).map(([key,ele])=>{
  //    if(key){
  //     totalAllInbox++;
  //   }
    if(ele.isNotReadMail){
       inboxNewTotal++;
    }
  });
  // console.log(totalAllInbox);
  dispatch(authActions.totalSentBox(inboxNewTotal))
}
  // console.log(inboxNewTotal)
    },[mailData])

    



  return err?<span className='d-flex justify-content-center mt-5'> <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /></span>:(

    <div className='me-2 w-100'>

<div className='d-flex justify-content-between mt-2 ms-2 me-2'>
      <div className='d-flex'>

  <div title='reload page' onClick={()=>setAbc("rerender deta")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
</div>
      </div>
      <div>
        <p>Sent</p>
      </div>
      </div>

      {/* ............................................ */}

      
      {
        mailData&&Object.entries(mailData).map(([key,ele])=>{
                // console.log(ele.todayDate);
                // console.log(ele.isNotReadMail);
                

          let newStr;
          let maxLength=55;
          if(ele?.subject.length > maxLength) {
              newStr = ele?.subject.substring(0, maxLength) + "...";
          } else {
              newStr = ele?.subject;
          }
          return <NavLink key={key} to={`/sentmail/readsentmail/${key}`} ><div className='d-flex border-bottom-0 text-dark pt-1 pb-1 mb-1' style={ele?.isNotReadMail?{backgroundColor:"lightgray"}:{}}>
               
                  <div className='d-flex gap-2 align-content-center justify-content-start ps-2'>
                     <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>  </span>
                     {ele?.isNotReadMail&&<span className='text-success'>{stars}</span>}
                     <span>To:{ele?.to}</span>
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