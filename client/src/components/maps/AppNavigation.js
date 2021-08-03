import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import AddLocationsModal from './AddLocationsModal'
import FilterType from './FilterType'

const AppNavigation = ({ showPosition }) => {
  //*Modal State
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  //* Filter Modal State
  const [showFilter, setShowFilter] = useState(false)
  const handleCloseFilter = () => setShowFilter(false)

  const handleChangeAddModal = () => {
    console.log('add location')
    setShow(true)
  }

  const handleChangeFilter = () => {
    console.log('modal filter')
    setShowFilter(true)
  }
  
  const logoutToken = () => {
    window.localStorage.removeItem('token')
  }

  return (
    <>
      <AddLocationsModal 
        show={show}
        onHide={handleClose}
        handleClose={handleClose}
      />

      <FilterType 
        show={showFilter}
        onHide={handleCloseFilter}
        handleClose={handleCloseFilter}
      />

      <Navbar collapseOnSelect expand="lg" className="app-nav">
        <Container>

          <Nav.Link onClick={showPosition} className="right-icons"><i className="fas fa-location-arrow"></i></Nav.Link>

          <Nav.Link className="right-icons" onClick={handleChangeFilter} ><i className="fas fa-filter"></i></Nav.Link>

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
                <Nav.Link onClick={logoutToken}>logout</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default AppNavigation
