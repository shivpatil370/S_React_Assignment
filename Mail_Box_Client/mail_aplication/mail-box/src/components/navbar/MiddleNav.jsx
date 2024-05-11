import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const MiddleNav = () => {
  return (
    <div className='d-flex align-items-center'>
        <InputGroup>
        <InputGroup.Text className='rounded-start-5'><i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></i></InputGroup.Text>
        <Form.Control className='rounded-end-5' aria-label="Amount (to the nearest dollar)" />
      </InputGroup>
    </div>
  )
}

export default MiddleNav