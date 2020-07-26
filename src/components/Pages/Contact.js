import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Form>
      <h2>Contact Me</h2>
      <hr />  
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Label>Full Name</Form.Label>
        <Form.Control type='text' placeholder='John Doe' />
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlInput2'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' />
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' rows='3' />
      </Form.Group>
      <Button type='button' variant='primary'>Submit</Button>
    </Form>
  );
}
