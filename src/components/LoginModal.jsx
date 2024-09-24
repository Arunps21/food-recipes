import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginModal({register}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="name xy" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={register}>
            Register here
          </a>
        </p>
        <Button variant="primary" style={{ marginLeft: "180px" }}>
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginModal;
