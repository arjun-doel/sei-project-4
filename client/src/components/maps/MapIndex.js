import React, { useState } from 'react'
import MapGL from 'react-map-gl'
import locationData from './dummyData'

const MapIndex = () => {
  const token = 'pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw'

  const [viewport, setNewViewport] = useState({
    latitude: locationData[0].latitude,
    longitude: locationData[0].longitude,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  })

  // const handleNewLocation = ({ longitude, latitude }) => {
  //   setNewViewport({
  //     longitude,
  //     latitude,
  //     zoom: 11,
  //     transitionInterpolator: new FlyToInterpolator({ speed: 1 }),
  //     transitionDuration: 'auto',
  //   })
  // }

  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={viewport => setNewViewport(viewport)}
        mapboxApiAccessToken={token}
      />
    </>
  )
}

export default MapIndex