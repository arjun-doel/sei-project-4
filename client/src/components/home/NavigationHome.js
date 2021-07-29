import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationHome = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="home-nav">
        <Container>

          <LinkContainer to="/">
            <Navbar.Brand id="main-logo"><i className="fas fa-map-marked"></i></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

            <Nav className="me-auto">
              <LinkContainer to="/register">
                <Nav.Link>register</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link href="#pricing">login</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationHome
