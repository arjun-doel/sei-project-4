import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavigationHome from '../home/NavigationHome'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const history = useHistory()
  // const [errors, setError] = useState(false)
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newLoginData = { ...loginData, [event.target.name]: event.target.value }
    setloginData(newLoginData)
  }
  // console.log('newLoginData', newLoginData)
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
    console.log('TOKEN', token)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', loginData)
      console.log('data', data)
      console.log(loginData)
      setTokenToLocalStorage(data.token)
      history.push('/maps')
      toast.success(`${data.message}`)
    } catch (err) {
      toast.warning('oops something went wrong!')
      console.log(err)
    }
  }

  return (
    <>
      <NavigationHome />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <input type="email" name="email" placeholder="enter email" value={loginData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="enter password" value={loginData.password} onChange={handleChange} required />
          <input type="submit" value="login" className="submit-login" />
        </div>
      </form>
    </>
  )
}

export default Login
