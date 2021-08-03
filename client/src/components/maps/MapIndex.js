import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl'
import AppNavigation from './AppNavigation'
import { usePosition } from '../hooks/usePosition'
import MainModal from './MainModal'

const MapIndex = () => {
  //* Location State
  const [locations, setLocations] = useState([])
  const { latitude, longitude, error } = usePosition()
  const token = 'pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw'

  //* Filter State
  const [filteredData, setFilteredData] = useState([])

  //*Info Modal State
  const [lgShow, setLgShow] = useState(false)
  const [modalInfo, setModalInfo] = useState([])

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
        const { data } = await axios.get('/api/maps/')
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
    setNewViewport({ 
      ...viewport, 
      latitude: latitude, 
      longitude: longitude,
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: 'auto',
    })
  }

  const handleModalChange = e => {
    const userInput = parseInt(e.target.id)
    console.log('userInput', userInput)
    console.log('locations', locations[0])
    const filteredArray = locations.filter(ite => ite.id === userInput)
    setModalInfo(filteredArray)
    setLgShow(true)
  }

  const handleFilteredChange = e => {
    console.log('filtered change', e.target.value)
    if (e.target.value === 'all'){
      setFilteredData(locations)
    } else {
      const filterTheData = locations.filter(ite => ite.location_type === e.target.value)
      setFilteredData(filterTheData)
    }
  }

  console.log('locations', locations)

  return (
    <>
      {modalInfo.map(ite =>
        <MainModal 
          key={ite.id}
          id={ite.id}
          name={ite.name}
          image1={ite.image1}
          image2={ite.image2}
          image3={ite.image3}
          description={ite.description}
          type={ite.location_type}
          address={ite.address}
          city={ite.city}
          country={ite.country}
          price={ite.price_rage}
          postCode={ite.postal_code}
          owner={ite.owner}
          comments={ite.comments}
          lgShow={lgShow}
          setLgShow={setLgShow}
          priceTag={ite.price_rage}
        />
      )}

      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={viewport => setNewViewport(viewport)}
        mapboxApiAccessToken={token}
      >
        {(filteredData.length > 0 ? filteredData : locations).map(ite => {
          return <Marker key={ite.id} longitude={parseFloat(ite.longitude)} latitude={parseFloat(ite.latitude)}>
            <span className="mark-icon"><i id={ite.id} onClick={handleModalChange} className="fas fa-map-pin"></i></span>
          </Marker>
        })}
      </ReactMapGL>
      <AppNavigation
        showPosition={showPosition}
        handleFilteredChange={handleFilteredChange}
      />
    </>
  )
}

export default MapIndex