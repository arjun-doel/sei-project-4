/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import loading from './load-red.svg'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET


export const ImageUploadField = ({ handleImageUrl, value, labelName, nameOf }) => {
  const [load, setLoad] = useState(false)

  const handleUpload = async event => {
    setLoad(true)
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    handleImageUrl(res.data.url)
  }



  return (
    <>
      <div className="upload-wrapper">
        <label className="frm-label" htmlFor={nameOf}> {labelName}</label>
        {load && !value ? <img className="load-symbol" src={loading} /> : ''}
        {value ? <i className="fas fa-check-circle"></i> : ''}
        <input type="file" id="file" name={nameOf} placeholder="choose image" onChange={handleUpload} className="image-upload"/>
      </div>
    </>
  )
}