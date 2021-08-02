import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import Modal from 'react-bootstrap/Modal'
import { ImageUploadField } from '../hooks/ImageUploadField'
import { getTokenFromLocalStorage } from '../hooks/auth'
import { ToastContainer, toast } from 'react-toastify'
// import 'bootstrap/dist/css/bootstrap.min.css'

const AddLocationsModal = ({ show, handleClose }) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    image1: '',
    image2: '',
    image3: '',
    price_rage: '',
    description: '',
    location_type: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
  })

  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    setFormData(getUserData)
  }

  const handleImage1Url = url => {
    setFormData({ ...formData, image1: url })
  }
  const handleImage2Url = url => {
    setFormData({ ...formData, image2: url })
  }
  const handleImage3Url = url => {
    setFormData({ ...formData, image3: url })
  }

  const submitForm = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/maps/', formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      toast.success('your location has been succesfully added!')
      history.push('/maps')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  console.log(formData)

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
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
          <form onSubmit={submitForm} className="add-location-frm">
            <div className="add-loc-frm-group">
              <label>name</label>
              <input type="text" placeholder="enter location name" name="name" onChange={handleUserData} value={formData.name} required />
            </div>
            <div className="add-loc-frm-group">
              <ImageUploadField
                value={formData.image1}
                name="image1"
                handleImageUrl={handleImage1Url}
                nameOf="image1"
                labelName="add a pic"
              />
              <ImageUploadField
                value={formData.image2}
                name="image2"
                handleImageUrl={handleImage2Url}
                nameOf="image2"
                labelName="add another pic"
              />
              <ImageUploadField
                value={formData.image3}
                name="image3"
                handleImageUrl={handleImage3Url}
                nameOf="image3"
                labelName="and another one..."
              />
            </div>
            <div className="add-loc-frm-group">
              <label>select price category</label>
              <select name="price_rage" onChange={handleUserData} value={formData.person}>
                <option value="0">choose option</option>
                <option value="1">£</option>
                <option value="2">££</option>
                <option value="3">£££</option>
                <option value="4">££££</option>
              </select>
            </div>
            <div className="add-loc-frm-group">
              <label>location type</label>
              <select name="location_type" onChange={handleUserData} value={formData.location_type}>
                <option value="0">choose option</option>
                <option value="food">food</option>
                <option value="landmarks">landmarks</option>
                <option value="bars">bars</option>
              </select>
            </div>
            <div className="add-loc-frm-group">
              <label>add description</label>
              <textarea type="textarea" placeholder="description here" name="description" onChange={handleUserData} value={formData.description} required />
            </div>
            <div className="add-loc-frm-group">
              <label>addres</label>
              <input type="text" placeholder="enter address" name="address" onChange={handleUserData} value={formData.address} required />
            </div>
            <div className="add-loc-frm-group">
              <label>city</label>
              <input type="text" placeholder="enter city" name="city" onChange={handleUserData} value={formData.city} required />
            </div>
            <div className="add-loc-frm-group">
              <label>state</label>
              <input type="text" placeholder="enter state if required" name="state" onChange={handleUserData} value={formData.state} />
            </div>
            <div className="add-loc-frm-group">
              <label>country</label>
              <input type="text" placeholder="enter country" name="country" onChange={handleUserData} value={formData.country} />
            </div>
            <div className="add-loc-frm-group">
              <label>postcode</label>
              <input type="text" placeholder="enter postcode" name="postal_code" onChange={handleUserData} value={formData.postal_code} required />
            </div>
            <button>submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddLocationsModal
