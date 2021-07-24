import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const AppNavigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="app-nav">
        <Container>

          <LinkContainer to="" className="right-icons">
            <Nav.Link><i className="fas fa-location-arrow"></i></Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="" className="right-icons">
            <Nav.Link><i className="fas fa-filter"></i></Nav.Link>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

            <Nav className="me-auto">
              <LinkContainer to="" className="left-icons">
                <Nav.Link>feed</Nav.Link>
              </LinkContainer>

              <LinkContainer to="" className="left-icons">
                <Nav.Link href="#pricing">favourites</Nav.Link>
              </LinkContainer>

              <LinkContainer to="" className="left-icons">
                <Nav.Link href="#pricing">profile</Nav.Link>
              </LinkContainer>

              <LinkContainer to="" className="left-icons">
                <Nav.Link href="#pricing">logout</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default AppNavigation
