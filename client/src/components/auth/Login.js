import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavigationHome from '../home/NavigationHome'
import axios from 'axios'

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
      console.log(data)
      console.log(loginData)
      setTokenToLocalStorage(data.token)
      history.push('/maps')
      // toast.success('Welcome Back! 😻')
    } catch (err) {
      // setError(true)
      console.log(err)
    }
  }

  return (
    <>
      <NavigationHome />
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
