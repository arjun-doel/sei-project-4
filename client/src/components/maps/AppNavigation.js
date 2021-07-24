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

          <LinkContainer to="">
            <Nav.Link>filter</Nav.Link>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

            <Nav className="me-auto">
              <LinkContainer to="">
                <Nav.Link>feed</Nav.Link>
              </LinkContainer>

              <LinkContainer to="">
                <Nav.Link href="#pricing">favourites</Nav.Link>
              </LinkContainer>

              <LinkContainer to="">
                <Nav.Link href="#pricing">favourites</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default AppNavigation
