// import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useRef } from "react";
import AppContext from "../../context-api/contextApi";

const UpdateProfilePage = () => {
    const nameRef=useRef();
    const urlRef=useRef();

const ctx=useContext(AppContext);

    const handleSubmit=(e)=>{
        e.preventDefault();

        const obj={
            name:nameRef.current.value,
            url:urlRef.current.value
        };
        // console.log(obj);

          fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
             method:"POST",
             body:JSON.stringify({
                idToken:ctx.token,
                displayName: obj.name,
                photoUrl: obj.url,
                returnSecureToken: true
             })
          })
          .then((res)=>{
              if(res.ok){
                return res.json().then((data)=>{
                    ctx.AdduserProfile(data)
                    // console.log(data)
                    nameRef.current.value="";
                    urlRef.current.value="";
                    alert("Profile Updated Successfully")
                })
              }
              else{
                 return res.json()
                  .then((err)=>{
                    //   console.log(err)
                      alert(err.error.message);
                  })
              }
          })
    };

// .......................USER PROFILE......................... 
    useEffect(()=>{
         fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
            method:"POST",
            body:JSON.stringify({idToken:ctx.token}),
            headers: {
                'Content-Type': 'application/json'
            }
         })
         .then((res)=>{
              if(res.ok){
                return res.json().then((data)=>{
                    // console.log(data);
                    ctx.AdduserProfile(data)
                })
              }
              else{
                return res.json().then((err)=>{
                    console.log(err.error.message)
                })
              }
         })
        },[ctx.userProfile]);
        // console.log(ctx.userProfile)

  return (
    <div>

    <div className="border">
      <ul className="d-md-flex justify-content-between ms-4 me-4 list-unstyled align-items-center">
        <li>Winners never quite, Quitters never win.</li>
        <li style={{width:"40%"}}><p style={{backgroundColor:"lightgray", borderRadius:"1rem", padding:"1rem"}} className="fluid h-md-5rem">Your profile is {ctx.userProfile?"100":"0"}% completed. A Complete Profile has higher chances of landing a job Complete now</p></li>
      </ul>
    </div>

    <div style={{width:"fit-Content",margin:"0 2rem 0 auto"}} className="border p-4">
        <div className="d-md-flex justify-content-between">
        <h3 className="d-inline-flex mb-4">Contact Details</h3>
        <Button className="bg-white" style={{height:"fit-Content",border:"1px solid red", color:"red"}} size="sm">cancel</Button>
        </div>

        <Form onClick={handleSubmit}>
      <Form.Group className="d-inline-flex me-4" controlId="formBasicEmail">
        <Form.Label className="me-4" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></Form.Label>
<Form.Label>Full Name:</Form.Label>
        <Form.Control size="sm" type="text" ref={nameRef}/>
      </Form.Group>

      <Form.Group className="d-inline-flex me-4" >
        <Form.Label className="me-4" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg></Form.Label>
        <Form.Label>Profile Photo URL:</Form.Label>
        <Form.Control size="sm" type="url" ref={urlRef}/>
      </Form.Group>
     
      <br></br>
      <Button className="mt-4 bg-danger" variant="primary" size="sm" type="submit">
        Update
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default UpdateProfilePage
