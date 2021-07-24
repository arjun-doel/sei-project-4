import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import AppNavigation from './AppNavigation'
import { usePosition } from '../hooks/usePosition'

const MapIndex = () => {
  const [locations, setLocations] = useState([])
  const { latitude, longitude, error } = usePosition()
  const token = 'pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw'

  const [viewport, setNewViewport] = useState({
    latitude: 51.462510,
    longitude: -0.132490,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  })

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

  const showPosition = () => {
    console.log('latitude', latitude)
    console.log('long', longitude)
    console.log(error)
    setNewViewport({ ...viewport, latitude: latitude, longitude: longitude })
  }

  return (
    <>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={viewport => setNewViewport(viewport)}
        mapboxApiAccessToken={token}
      >
        {locations.map(ite => {
          return <Marker key={ite.id} longitude={parseFloat(ite.longitude)} latitude={parseFloat(ite.latitude)}>
            <span id={ite.id} className="mark-icon"><i className="fas fa-map-pin"></i></span>
          </Marker>
        })}
      </ReactMapGL>
      <AppNavigation 
        showPosition={showPosition}
      />
    </>
  )
}

export default MapIndex