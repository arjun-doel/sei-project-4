import React, { useState } from 'react'
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl'

const MapIndex = () => {

  const token = 'pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw'
  
  const [viewport, setNewViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  })

  return (
    <div className="map-container">
      <ReactMapGL
        mapboxApiAccessToken={token}
        height="100%"
        width="100%"
        mapStyle='mapbox://styles/mapbox/outdoors-v11'
        {...viewport}
        onViewportChange={viewport => setNewViewport(viewport)}
      >
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
        >
          <span role="img" aria-label="map-marker" className="marker rocket">🚀</span>
        </Marker>
        {/* {locationData.map(location => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <span role="img" aria-label="map-marker" className="marker">{location.icon}</span>
          </Marker>
        ))} */}
      </ReactMapGL>
    </div>
  )
}

export default MapIndex