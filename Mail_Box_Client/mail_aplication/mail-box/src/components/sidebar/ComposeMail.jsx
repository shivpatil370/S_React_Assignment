// import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const ComposeMail = () => {
    const [editorState, setEditorState] = useState();

    const onEditorStateChange = (newEditorState) => {
        // Handle changes to the editor state
        setEditorState(newEditorState);
      };
    
  return (
    <div className='m-4'>
        <Offcanvas.Header className='justify-content-between bg-light p-1 ps-2 pe-2' closeButton>
          <Offcanvas.Title>new message</Offcanvas.Title>
        </Offcanvas.Header>

        <InputGroup className="">
        <InputGroup.Text id="basic-addon1">To</InputGroup.Text>
        <Form.Control
          aria-label="text"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="">
        <Form.Control
          placeholder="Subject"
        />
      </InputGroup>

      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />


                            {/* BUTTON */}

      <div className='d-flex mb-0'>
      <Button variant="primary" style={{"marginTop":"50vh"}} size="sm">send</Button>
      </div>

    </div>
  )
}

export default ComposeMail