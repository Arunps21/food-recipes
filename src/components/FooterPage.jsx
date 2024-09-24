import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function FooterPage() {
  return (
    <>
    <Container fluid>
        <Row className='bg-primary '>
            <Col>
            <p className='text-black text-center p-3 mb-0'>&copy; 2024 <strong>Food Recipe</strong>. &reg; All rights reserved.</p>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default FooterPage