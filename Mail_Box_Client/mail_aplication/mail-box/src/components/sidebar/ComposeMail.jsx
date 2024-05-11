// import React from 'react'
import React, { useRef, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const ComposeMail = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const toRef=useRef();
  const subjectRef=useRef();

 


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
              messages:content
            };
    
              if(obj.to===""){
                alert("Please add a valid email")
                return
              }
              if(obj.subject===""){
                alert("Please add a proper subject!");
                return;
              }
              // console.log(obj.messages[0].text);
          
    
            fetch("https://mail-box-api-default-rtdb.firebaseio.com/sentbox.json",{
              method:"POST",
              body:JSON.stringify(obj),
              headers:{
                "Content-Type":"application/json"
              }
            })
            .then((res)=>{
              if(res.ok){
                return res.json().then((data)=>{
                  console.log(data);
                  alert("Message sent successfully!");
                 })
              }
              else{
               return res.json().then((err)=>{
                  console.log(err);
                })
              }
            })
    
            toRef.current.value="";
            subjectRef.current.value="";
            setEditorState(EditorState.createEmpty());
          }

  return (
    <div>

<form onSubmit={handleSubmit}>
        <Offcanvas.Header className='justify-content-between bg-light p-1 ps-2 pe-2' closeButton>
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
      <Button className='ms-2'>send</Button>
      </form>
    </div>
  );
}

export default ComposeMail;