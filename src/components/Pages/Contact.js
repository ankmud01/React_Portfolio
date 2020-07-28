import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Form>
      <h1
        style={{
          marginTop: -20,
          marginBottom: 10,
          textAlign: 'left',
        }}
      >
        Contact Me
      </h1>
      <hr />
      <div class='form-group row text-right'>
        <label for='Email' class='col-sm-2 col-form-label'>
          E-mail:
        </label>
        <div class='col-sm-10 text-center'>
          <a class='info' href='mailto:mudvari.ankit@gmail.com'>
            <i class='icon fa fa-envelope'></i>
            <span> </span>
            mudvari.ankit@gmail.com
          </a>
        </div>
        <label for='LinkedIn' class='col-sm-2 col-form-label'>
          LinkedIn:
        </label>
        <div class='col-sm-10 text-center'>
          <a
            class='info'
            href='https://www.linkedin.com/in/ankit-mudvari-1792381a7/'
          >
            <i class='icon fa fa-linkedin'></i>
            <span> </span>
            ankit-mudvari
          </a>
        </div>
        <label for='Github' class='col-sm-2 col-form-label'>
          Github:
        </label>
        <div class='col-sm-10 text-center'>
          <a class='info' href='https://github.com/ankmud01'>
            <i class='icon fa fa-github'></i>
            <span> </span>
            ankmud01
          </a>
        </div>
        <label for='Twitter' class='col-sm-2 col-form-label'>
          Twitter:
        </label>
        <div class='col-sm-10 text-center'>
          <a class='info' href='https://twitter.com/home'>
            <i class='icon fa fa-twitter'></i>
            <span> </span>
            @AnkitMudvari
          </a>
        </div>
      </div>
      <div>
        <hr />
        <h3
          style={{
            marginTop: 10,
            marginBottom: 10,
            textAlign: 'left',
          }}
        >
          Message Me
        </h3>
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
        <Button type='button' variant='primary'>
          Submit
        </Button>
      </div>
    </Form>
  );
}
{
  /* <Form.Group controlId='exampleForm.ControlInput1'>
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
      <Button type='button' variant='primary'>
        Submit
      </Button> */
}
