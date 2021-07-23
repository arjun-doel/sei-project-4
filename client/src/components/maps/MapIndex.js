import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MapIndex = () => {

  const [locations, setLocations] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/maps')
        setLocations(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(locations)

  return (
    <h1>Maps</h1>
  )
}

export default MapIndex