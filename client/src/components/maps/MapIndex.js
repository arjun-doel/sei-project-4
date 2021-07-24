import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import locationData from './dummyData'

const MapIndex = () => {
  const [locations, setLocations] = useState([])
  const token = 'pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw'

  const [viewport, setNewViewport] = useState({
    latitude: locationData[0].latitude,
    longitude: locationData[0].longitude,
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

  console.log(locations)

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
            <span><i className="fas fa-map-pin"></i></span>
          </Marker>
        })}

        <Marker longitude={0.005540} latitude={51.509240}>
          <span><i className="fas fa-map-pin"></i></span>
        </Marker>
      </ReactMapGL>
    </>
  )
}

export default MapIndex