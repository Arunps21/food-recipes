import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterModal({login}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="name xy" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="San@2001" />
        </Form.Group>
        <p>
          If you already have an account? <a href="" onClick={login}>Login here</a>
        </p>

        <Button variant="primary" style={{ marginLeft: "180px" }}>
          Register
        </Button>
      </Form>
    </>
  );
}

export default RegisterModal;
