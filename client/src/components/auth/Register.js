import React, { useState } from 'react'
import NavigationHome from '../home/NavigationHome'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Register = () => {

  //* Form object state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // const [newSubmitForm, setNewSubmitForm] = useState([])

  //*Get userInput
  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    setErrors(newErrors)
  }


  //* Submit form as post request to backend
  const submitForm = async e => {
    e.preventDefault()
  }

  return (
    <>
      <NavigationHome />

      <Container fluid="md" className="center-height animate__slideOutDown">
        <Row className="justify-content-md-center">
          <Col xs={7}>
            <Form onSubmit={submitForm} className='register-form'>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>first name</Form.Label>
                  <Form.Control type="email" placeholder="enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>last name</Form.Label>
                  <Form.Control type="text" placeholder="enter last name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control name="username" type="text" placeholder="enter username" value={formData.username} onChange={handleUserData} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <Form.Control name="email" type="email" placeholder="enter email" value={formData.email} onChange={handleUserData} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>password</Form.Label>
                <Form.Control name="password" type="password" placeholder="enter password" value={formData.password} onChange={handleUserData} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>please confirm your password</Form.Label>
                <Form.Control name="passwordConfirmation" type="password" placeholder="confirm password" value={formData.passwordConfirmation} onChange={handleUserData} />
              </Form.Group>

              <button type="submit">submit</button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Register