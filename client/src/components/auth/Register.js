import React from 'react'
import NavigationHome from '../home/NavigationHome'

const Register = () => {

  //* Form object state
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  // const [errors, setErrors] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  // const [newSubmitForm, setNewSubmitForm] = useState([])

  //*Get userInput
  // const handleUserData = e => {
  //   const getUserData = { ...formData, [e.target.name]: e.target.value }
  //   const newErrors = { ...errors, [e.target.name]: '' }
  //   setFormData(getUserData)
  //   setErrors(newErrors)
  // }


  //* Submit form as post request to backend
  // const submitForm = async e => {
  //   e.preventDefault()
  // }

  return (
    <>
      <NavigationHome />
      <div className="register-wrap">
        <form className="register-form">

          <div className="form-group-register">
            <label className="frm-label" htmlFor="email">username</label>
            <input className="main-input" type="text" name="username" placeholder="enter username" required />
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="email">email</label>
            <input className="main-input" type="email" name="email" placeholder="enter email" required />
          </div>
          <div className="row-register">
            <div className="form-group-register">
              <label className="frm-label" htmlFor="first_name">first name</label>
              <input className="main-input" type="text" name="first_name" placeholder="enter first name" required />
            </div>
            <div className="form-group-register">
              <label className="frm-label" htmlFor="last_name">email</label>
              <input className="main-input" type="text" name="last_name" placeholder="enter last name" required />
            </div>
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="password">password</label>
            <input className="main-input" type="password" name="password" placeholder="enter password" required />
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="password_confirmation">password confirmation</label>
            <input className="main-input" type="password" name="password_confirmation" placeholder="confirm password" required />
          </div>
          <div className="form-group-register">
            <label className="frm-label" htmlFor="profile_photo">upload profile photo</label>
            <input className="file-input" type="file" name="profile_photo" placeholder="choose image" required />
          </div>
          <button>submit</button>
        </form>
      </div>
    </>
  )
}

export default Register