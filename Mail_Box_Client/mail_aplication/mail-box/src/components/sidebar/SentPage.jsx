import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


let stars=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
      </svg>

const SentPage = () => {
  const [mailData,setMailData]=useState({});
  // console.log(mailData)

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
    },[])

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
          let newStr;
          let maxLength=25;
          if(ele.subject.length > maxLength) {
              newStr = ele.subject.substring(0, maxLength) + "...";
          } else {
              newStr = ele.subject;
          }
          return <NavLink to={`/sentmail/readsentmail/${key}`} key={key}><div className='d-flex mt-2 mb-2'>
               
                  <div className='d-flex gap-2 align-content-center justify-content-start ps-2'>
                     <span><input type='checkbox'></input></span>
                     <span>{stars}</span>
                     <span>To:{ele.to}</span>
                   </div>

                   <div className='position-fixed start-50'>
                    <span>{newStr}</span>
                   </div>
                    
                    <div className='position-fixed end-0'>
                      <p className='pe-2'>12/12/12</p>
                    </div>
                   
          </div></NavLink>
        })
      }
    </div>
  )
}

export default SentPage