import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4}>
            <h5 className='text-warning'>About Us</h5>
            <p className='text-dark'>
              At Crave & Cook, we bring you the best recipes to satisfy your cravings and ignite your passion for cooking.
            </p>
            <a href="/about-us" className="text-warning">Learn more about us</a>
          </Col>

          {/* Quick Links Section */}
          <Col md={4}>
            <h5 className='text-warning'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark">Home</a></li>
              <li><a href="/recipes" className="text-dark">Recipes</a></li>
              <li><a href="/blog" className="text-dark">Blog</a></li>
              <li><a href="/contact-us" className="text-dark">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-dark">Privacy Policy</a></li>
              <li><a href="/terms" className="text-dark">Terms & Conditions</a></li>
            </ul>
          </Col>

          {/* Newsletter Section */}
          <Col md={4}>
            <h5 className='text-warning'>Newsletter</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Subscribe
              </Button>
            </Form>
            <div className="mt-3">
              <h6 className='text-warning'>Stay Connected</h6>
              <a href="https://facebook.com" ><FontAwesomeIcon icon={faSquareFacebook} className="me-3" style={{color: "#000000",}} /></a>
              <a href="https://instagram.com" ><FontAwesomeIcon icon={faInstagram} className="me-3" style={{color: "#f1346b",}} /></a>
              <a href="https://pinterest.com" className="text-white me-3"><FontAwesomeIcon icon={faPinterest} style={{color: "#e6240f",}} /></a>
              <a href="https://youtube.com" ><FontAwesomeIcon icon={faYoutube} className="me-3" style={{color: "#df1111",}} /></a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
            <p className="mb-0 mt-2 text-light text-center">&copy; {new Date().getFullYear()} Crave & Cook. &reg;All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
