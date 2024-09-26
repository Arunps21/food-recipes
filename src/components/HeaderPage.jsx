import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';


function HeaderPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isRegistered,setIsRegistered] = useState(false)
  const toggleForm = () =>{
    setIsRegistered(!isRegistered)
  }
  return (
    <>
        <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-2 fw-bold text-warning'>Crave & Cook</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={handleShow}>Login</Nav.Link>
            <NavDropdown title="Deals" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/AboutUs">
              About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      {/* Register Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{isRegistered ? "Register Here" : "Login Here"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            isRegistered? <RegisterModal login={toggleForm}/> : <LoginModal register={toggleForm}/>
          }
        </Modal.Body>
      </Modal>
      
    </Navbar>
    </>
  )
}

export default HeaderPage