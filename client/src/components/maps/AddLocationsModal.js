import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
          <Form className="add-mdl-form">
            <Row>
              <Form.Group as={Col} controlId="formGridEmail" className="add-frm-grp">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="enter name of location" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3 add-frm-grp">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 add-frm-grp">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 add-frm-grp">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Row>
              <Form.Group as={Col} controlId="formGridPassword" className="add-frm-grp">
                <Form.Label>description</Form.Label>
                <Form.Control as="textarea" placeholder="enter description" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 add-frm-grp" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="add-frm-grp">
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="submit-add-form">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddLocationsModal
