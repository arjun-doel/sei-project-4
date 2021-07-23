import React from 'react'
import NavigationHome from '../home/NavigationHome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Login = () => {
  return (
    <>
      <NavigationHome />
      <Container fluid="md" className="center-height animate__slideOutDown">
        <Row className="justify-content-md-center">
          <Col xs={7}>
            <Form className='register-form'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <Form.Control name="email" type="email" placeholder="enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>password</Form.Label>
                <Form.Control name="password" type="password" placeholder="enter password" />
              </Form.Group>

              <button type="submit">submit</button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Login
