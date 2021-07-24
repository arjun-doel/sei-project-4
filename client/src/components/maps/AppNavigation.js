import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { usePosition } from '../hooks/usePosition'

const AppNavigation = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const { latitude, longitude, error } = usePosition()

  console.log(latitude + longitude + error) 

  const handleChangeAddModal = () => {
    console.log('add location')
    setShow(true)
  }

  const getCurrentUserLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(showPosition))
    } else {
      console.log('location not found')
    }
  }

  const showPosition = () => {
    // console.log(position.coords.latitude + position.coords.longitude)
  }

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>add a new location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Dont even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">add</Button>
        </Modal.Footer>
      </Modal>

      <Navbar collapseOnSelect expand="lg" className="app-nav">
        <Container>

          <Nav.Link onClick={getCurrentUserLocation} className="right-icons"><i className="fas fa-location-arrow"></i></Nav.Link>

          <Nav.Link className="right-icons"><i className="fas fa-filter"></i></Nav.Link>

          <Nav.Link className="right-icons" onClick={handleChangeAddModal}><i className="fas fa-plus"></i></Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

            <Nav className="me-auto">
              <LinkContainer to="/feed" className="left-icons">
                <Nav.Link>feed</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/favourites" className="left-icons">
                <Nav.Link>favourites</Nav.Link>
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

export default AppNavigation
