// import React from 'react'
import React, { useRef, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';


const ComposeMail = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const mail=localStorage.getItem("email");
  const [email,setEmail]=useState(mail);
// console.log(email)
  const toRef=useRef();
  const subjectRef=useRef();

  const navigate=useNavigate();
 
  let currentDate = new Date();
  let fullDate = currentDate.getFullYear() + '-' + 
                 ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + 
                 ('0' + currentDate.getDate()).slice(-2);
  
  // console.log(fullDate);

  const handleSubmit=(e)=>{
            e.preventDefault();
            const content = convertToRaw(editorState.getCurrentContent());

            const contentState = editorState.getCurrentContent();
            if (!contentState.hasText()) {
        alert('Please add some content before sending.');
        return;
      }
           
      
      
            let obj={
              to:toRef.current.value,
              subject:subjectRef.current.value,
              messages:content,
              todayDate:fullDate,
              isNotReadMail:true
            };
            // console.log(obj);
    
              if(obj.to===""){
                alert("Please add a valid email")
                return
              }
              if(obj.subject===""){
                alert("Please add a proper subject!");
                return;
              }
              // console.log(obj.messages[0].text);
          
    
              if(email){
            // fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${email}/sentbox.json`,{
            //   method:"POST",
            //   body:JSON.stringify(obj),
            //   headers:{
            //     "Content-Type":"application/json"
            //   }
            // })
            // .then((res)=>{
            //   if(res.ok){
            //     return res.json().then((data)=>{
            //       console.log(data);
                  
            //      return fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${email}/sentbox.json`,{
            //   method:"POST",
            //   body:JSON.stringify(obj),
            //   headers:{
            //     "Content-Type":"application/json"
            //   }
            // })
            // .then((res)=>{
            //   if(res.ok){
            //     return res.json().then((data)=>{
            //       console.log(data);
                  
            //       // alert("Message sent successfully!");
            //      })
            //   }
            //   else{
            //    return res.json().then((err)=>{
            //       console.log(err);
            //       throw new Error(err.error.message);
            //     })
            //   }
            //       // alert("Message sent successfully!");
            //      })
            //   }
            //   else{
            //    return res.json().then((err)=>{
            //       console.log(err);
            //       throw new Error(err.error.message);
            //     })
            //   }
            // })
            // .catch((err)=>{
            //   console.log(err)
            // })

            function sendEmail(email, obj) {
            return fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${email}/sentbox.json`, {
              method: "POST",
              body: JSON.stringify(obj),
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then((res) => {
              if (res.ok) {
                return res.json().then((data) => {
                  console.log(data);
                  return fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${email}/inboxjson`, {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  })
                  .then((res) => {
                    if (res.ok) {
                      return res.json().then((data) => {
                        console.log(data);
                        // You can perform additional actions here
                      });
                    } else {
                      return res.json().then((err) => {
                        console.log(err);
                        throw new Error(err.error.message);
                      });
                    }
                  });
                });
              } else {
                return res.json().then((err) => {
                  console.log(err);
                  throw new Error(err.error.message);
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
          };

          Promise.all([
            sendEmail(email, obj)])
          .then(() => {
            console.log("All promises resolved successfully!");
            alert("Mail sent Successfully!")
          })
          .catch((error) => {
            console.error("Error occurred:", error);
          });
    
            toRef.current.value="";
            subjectRef.current.value="";
            setEditorState(EditorState.createEmpty());
           
          }
        }
        

  return (
    <div>

<form onSubmit={handleSubmit}>
        <Offcanvas.Header onClick={()=>navigate("/")} className='justify-content-between bg-light p-1 ps-2 pe-2' closeButton>
          <Offcanvas.Title>new message</Offcanvas.Title>
        </Offcanvas.Header>
         <InputGroup className="">         <InputGroup.Text id="basic-addon1">To</InputGroup.Text>         <Form.Control
          aria-label="text"
          aria-describedby="basic-addon1"
          ref={toRef}
        />
      </InputGroup>

      <InputGroup className="">
        <Form.Control
          placeholder="Subject"
          ref={subjectRef}
        />
      </InputGroup>


      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <Button type="submit" className='ms-2'>send</Button>
      </form>
    </div>
  );
}

export default ComposeMail;