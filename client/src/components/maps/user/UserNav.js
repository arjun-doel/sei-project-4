import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const UserNav = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="app-nav">
        <Container>

          <Nav.Link className="right-icons"><i className="fas fa-map-marked"></i></Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

            <Nav className="me-auto">
              <LinkContainer to="/feed" className="left-icons">
                <Nav.Link>feed</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/profile" className="left-icons">
                <Nav.Link>profile</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/" className="left-icons">
                <Nav.Link>logout</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default UserNav
