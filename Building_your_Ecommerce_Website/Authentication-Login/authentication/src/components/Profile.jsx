// import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Profile = () => {
  return (
    <div className='w-25 p-3 bg-light m-auto mt-5'>
       <Form className='text-center'>

        <h1 className='text-center'>User Profile</h1>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

       </Form>
    </div>
  )
}

export default Profile
