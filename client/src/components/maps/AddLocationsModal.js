import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const AddLocationsModal = ({ show, handleClose }) => {
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
    </>
  )
}

export default AddLocationsModal
