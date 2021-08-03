import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Fade from 'react-reveal'

const FilterType = ({ show, handleClose, handleFilteredChange }) => {

  return (
    <>

      <Modal show={show}
        onHide={handleClose}
        className="filter-modal"
      >
        <Modal.Header>
          <Modal.Title>filter</Modal.Title>
        </Modal.Header>
        <Fade collapse>
          <Modal.Body>
            <Form.Select aria-label="Default select example" onChange={handleFilteredChange}>
              <option value="all">all</option>
              <option value="food">food</option>
              <option value="bars">bars</option>
              <option value="landmarks">landmarks</option>
            </Form.Select>
          </Modal.Body>
        </Fade>
      </Modal>
    </>
  )
}

export default FilterType
