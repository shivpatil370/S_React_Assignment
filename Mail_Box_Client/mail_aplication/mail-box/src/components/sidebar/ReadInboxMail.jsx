// import React from 'react'
import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { useNavigate, useParams } from 'react-router-dom';

const ReadInboxMail = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [email,setEmail]=useState("");
  const [subject,setSubjet]=useState("");
  const mail=localStorage.getItem("email");
  const [emails,setEmails]=useState(mail);
  const [isRead,setIsRead]=useState(false);
  const [date,setDate]=useState("12/12/12")
  const { id } = useParams(); 
//   console.log(id);

const navigate=useNavigate();

var name=""
if(email){
  for(let i=0; i<email.length; i++){
      if(email[i]==="@"){
        break;
      }
      else{
        name=name+email[i];
      }
  }
}

      const emailid = emails;
      const cleanedEmail = emailid.replace(/[@.]/g, '');
useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/inbox/${id}.json`
        );
        const rawData = await response.json();
             setDate(rawData.todayDate)
             setEmail(rawData.to);
             setSubjet(rawData.subject);
             setIsRead(rawData.isNotReadMail);

        // Check if rawData.messages has the required structure
        if (rawData && rawData.messages && rawData.messages.blocks) {
          // Provide an empty entityMap if it's missing
          const entityMap = rawData.messages.entityMap || {};
          const contentState = convertFromRaw({
            blocks: rawData.messages.blocks,
            entityMap: entityMap,
          });
          setEditorState(EditorState.createWithContent(contentState));
        } else {
          console.error('Invalid RawDraftContentState:', rawData);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
  
    fetchContent();
  }, [cleanedEmail]);


  useEffect(()=>{
    if(isRead){
      fetch(`https://mail-box-api-default-rtdb.firebaseio.com/${cleanedEmail}/inbox/${id}.json`,{
       method:'PATCH',
       body:JSON.stringify({
         isNotReadMail:false
       })
       
      })
      
    }
},[isRead])


  return (
    <div>
         <div className='d-flex justify-content-between ms-2 mt-2 me-2'>
      <div className='d-flex gap-4'>

        <div onClick={()=>navigate("/")} title='back to sent mail'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
        </div>

        <div title='Delete message'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
        </div>

        <div title='Mark as unread!'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-dash-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5"/>
</svg>
        </div>

        <div title='Move to inbox'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-arrow-down" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>
        </div>

      </div>
      <p>sent</p>
      </div>

<div>
<h5 className='ms-2'>{subject}</h5>

<div className='d-flex ms-2 gap-2 mt-4 border-bottom pb-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>

<div>
<h6>{name}</h6>
<p>{email}</p>
</div>
<p className='position-fixed end-0 me-2'>{date}</p>
</div>
</div>
     
     <div className='ms-2'>
      <Editor
        editorState={editorState}
        readOnly={true}
        toolbarHidden={true}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
      />
      </div>
      <div>
        <button className='mt-4 ms-2 bg-success text-white border' disabled>reply</button>
      </div>
    </div>
  )
}

export default ReadInboxMail