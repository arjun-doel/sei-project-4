import React, { useState } from 'react'
import NavigationHome from '../home/NavigationHome'
import { ImageUploadField } from '../hooks/ImageUploadField'

const Register = () => {

  //* Form object state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    profile_image: '',
    password: '',
    password_confirmation: '',
  })

  // const [errors, setErrors] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  // const [newSubmitForm, setNewSubmitForm] = useState([])

  //*Get userInput
  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    // const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    // setErrors(newErrors)
  }

  const handleImageUrl = url => {
    setFormData({ ...formData, profileImage: url })
  }


  //* Submit form as post request to backend
  // const submitForm = async e => {
  //   e.preventDefault()
  // }

  console.log(formData)

  return (
    <>
      <NavigationHome />
      <div className="register-wrap">
        <form className="register-form">

          <div className="form-group-register">
            <label className="frm-label" htmlFor="email">username</label>
            <input className="main-input" type="text" name="username" placeholder="enter username" value={formData.username} onChange={handleUserData} required />
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="email">email</label>
            <input className="main-input" type="email" name="email" placeholder="enter email" value={formData.email} onChange={handleUserData} required />
          </div>
          <div className="row-register">
            <div className="form-group-register">
              <label className="frm-label" htmlFor="first_name">first name</label>
              <input className="main-input" type="text" name="first_name" placeholder="enter first name" value={formData.first_name} onChange={handleUserData} required />
            </div>
            <div className="form-group-register">
              <label className="frm-label" htmlFor="last_name">email</label>
              <input className="main-input" type="text" name="last_name" placeholder="enter last name" value={formData.last_name} onChange={handleUserData} required />
            </div>
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="password">password</label>
            <input className="main-input" type="password" name="password" placeholder="enter password" value={formData.password} onChange={handleUserData} required />
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="password_confirmation">password confirmation</label>
            <input className="main-input" type="password" name="password_confirmation" placeholder="confirm password" value={formData.password_confirmation} onChange={handleUserData} required />
          </div>
          <div className="form-group-register">

            <ImageUploadField 
              value={formData.profile_image}
              name="profileImage"
              handleImageUrl={handleImageUrl}
            />

          </div>
          <button>submit</button>
        </form>
      </div>
    </>
  )
}

export default Register