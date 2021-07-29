/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET


export const ImageUploader1 = ({ handleImageUrl, value, labelName }) => {

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    handleImageUrl(res.data.url)
  }



  return (
    <>
      <div className="upload-wrapper">
        <label className="frm-label" htmlFor="image1" > {labelName}</label>
        {value ? <i className="fas fa-check-circle"></i> : ''}
      </div>
      <input className="file-input" type="file" name="image1" placeholder="choose image" onChange={handleUpload} required />
    </>   
  )
}