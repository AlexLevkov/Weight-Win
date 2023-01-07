import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Card, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';

const Blog = () => {

  const [activeTopic, setActiveTopic] = useState('all');

  return (
    <div className='layout'>

    <Form inline>
      <FormControl type="text" placeholder="Email" className="mr-sm-2" />
      <Button variant="outline-success">Subscribe</Button>
    </Form>

    <Navbar bg="light" >
      <Navbar.Brand href="#"></Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#all" onClick={() => setActiveTopic('all')}>View All</Nav.Link>
          <Nav.Link href="#health" onClick={() => setActiveTopic('health')}>Health</Nav.Link>
          <Nav.Link href="#sport" onClick={() => setActiveTopic('sport')}>Sport</Nav.Link>
          <Nav.Link href="#food" onClick={() => setActiveTopic('food')}>Food</Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>

    <Container className='d-flex justify-content-between align-items-center'>
    <Row className='w-100'>
    {activeTopic === 'all' || activeTopic === 'health' ?
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className="mt-5 mt-md-0" style={{width: '18rem',margin:'auto' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Blog Health</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary" href="#">Continue reading</Button>
      </Card.Body>
    </Card> 
    </Col> : null }

    {activeTopic === 'all' || activeTopic === 'sport' ?
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card  className="mt-5 mt-md-0" style={{width: '18rem',margin:'auto' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Blog Sport</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary" href="#">Continue reading</Button>
      </Card.Body>
    </Card> 
    </Col> : null }

    {activeTopic === 'all' || activeTopic === 'food' ?
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className="mt-5 mt-md-0" style={{width: '18rem',margin:'auto' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Blog Food</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary" href="#">Continue reading</Button>
      </Card.Body>
    </Card> 
    </Col> : null }



    </Row>
    </Container>

  
  </div>
  )
}

export default Blog



