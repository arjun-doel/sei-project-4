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
        size="lg"
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

            <div className="pricing-wrap">
              <p>choose pricing range</p>
              <select name="price" className="pricing-select">
                <option value="1">£</option>
                <option value="2">££</option>
                <option value="3">£££</option>
                <option value="4">££££</option>
              </select>
            </div>

            <p>add photos</p>
            <div className="upload-pic">
              <div className="single-upload">
                <input type="file" id="upload" hidden />
                <label htmlFor="upload">Choose File <i className="far fa-image"></i></label>
              </div>
              <div className="single-upload">
                <input type="file" id="upload" hidden />
                <label htmlFor="upload">Choose File <i className="far fa-image"></i></label>
              </div>
              <div className="single-upload">
                <input type="file" id="upload" hidden />
                <label htmlFor="upload">Choose File <i className="far fa-image"></i></label>
              </div>
            </div>

            <Row>
              <Form.Group as={Col} controlId="formGridPassword" className="add-frm-grp">
                <Form.Label>description</Form.Label>
                <Form.Control as="textarea" placeholder="enter description" />
              </Form.Group>
            </Row>

            <Form.Label>add operating hours</Form.Label>
            <Row>
              <Col>
                <Form.Control placeholder="opening hour" />
              </Col>
              <Col>
                <Form.Control placeholder="closing hour" />
              </Col>
            </Row>

            <Form.Group className="mb-3 add-frm-grp" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="add-frm-grp">
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col xs={5}>
                <Form.Control placeholder="Country" className="country" />
              </Col>
              <Col>
                <Form.Control placeholder="State" className="state-post" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" className="state-post" />
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
