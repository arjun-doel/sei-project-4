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
          <Col xs={12} md={8}>
            <Form onSubmit={submitForm} className='register-form'>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="Enter username" value={formData.username} onChange={handleUserData} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleUserData} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleUserData} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Please confirm your password</Form.Label>
                <Form.Control name="passwordConfirmation" type="password" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleUserData} />
              </Form.Group>

              <button type="submit">Submit</button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Register