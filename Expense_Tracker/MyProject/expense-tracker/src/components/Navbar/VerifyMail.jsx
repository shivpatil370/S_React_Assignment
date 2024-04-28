// import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context-api/contextApi';

const VerifyMail = () => {
    // const verifiedm=localStorage.getItem("mailverify");
    // const [verifyMail,setVerifyMail]=useState(verifiedm);

    const ctx=useContext(AppContext);
const navigate=useNavigate()

    const handleverify=()=>{
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
          method:"POST",
          body:JSON.stringify({
            requestType:"VERIFY_EMAIL",
            idToken:ctx.token
          })
        })
        .then((res)=>{
            if(res.ok){
              return res.json().then((data)=>{
                // console.log(data);
                // setVerifyMail(data.email);
                localStorage.setItem("mailverify",JSON.stringify(data.email));
                // setIsmail(false);
                alert("verify mail successfully!")
                navigate(-1)
              })
            }
            else{
              return res.json().then((err)=>{
                console.log(err.error.message);
              })
            }
        })
    };


  return (
    <div>
      <div className="w-25 p-4 bg-light m-auto mt-5">
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Button onClick={handleverify} variant="primary" size='sm' type="submit">
        verify email
      </Button>
      <Button onClick={()=>navigate(-1)} className='bg-info ms-1' size='sm'>cancel</Button>
         </div>
    </div>
  )
}

export default VerifyMail
