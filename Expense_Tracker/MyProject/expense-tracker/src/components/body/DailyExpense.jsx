// import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DailyExpense = () => {
  return (
    <div>
    <div className='w-25 p-4 m-auto mt-5 bg-light'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>expense amount:</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description:</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Select className='mb-3' aria-label="Default select example">
      <option>category</option>
      <option value="food">Food</option>
      <option value="petrol">Petrol</option>
      <option value="salary ">salary </option>
    </Form.Select>
      
      <Button variant="primary" type="submit">
        Add expenses
      </Button>
    </Form>

    </div>
      <h3 className='text-center'>see expenses</h3>

    </div>
  )
}

export default DailyExpense
