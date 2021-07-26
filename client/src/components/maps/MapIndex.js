import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import AppNavigation from './AppNavigation'
import { usePosition } from '../hooks/usePosition'
import Modal from 'react-bootstrap/Modal'
// import Carousel from 'react-bootstrap/Carousel'

const MapIndex = () => {
  //* Location State
  const [locations, setLocations] = useState([])
  const { latitude, longitude, error } = usePosition()
  const token = 'pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw'

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

  const handleModalChange = e => {
    const userInput = parseInt(e.target.id)
    console.log('userInput', userInput)
    console.log('locations', locations[0])
    const filteredArray = locations.filter(ite => ite.id === userInput)
    setModalInfo(filteredArray)
    setLgShow(true)
  }

  console.log('modal info', modalInfo)

  return (
    <>
      {modalInfo.map(ite =>
        <Modal
          key={ite.id}
          size="md"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="info-modal"
        >
          <Modal.Header>
            <Modal.Title id="example-modal-sizes-title-lg">
              <div className="modal-info-header">
                {ite.name}
                <i className="far fa-heart"></i>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="short-info">
              <span className="loc-type">food - dinner</span>
              <span className="opening-times"><strong><i className="far fa-clock"></i></strong> 9am - 6pm</span>
            </div>
            <hr />
            <div className="modal-description">
              <p>{ite.description}</p>
              <span><strong>posted by</strong> {ite.owner.username}</span>
            </div>
            <hr />
            <div className="modal-gallery">
              <img src={ite.image1} alt="" />
              <img src={ite.image2} alt="" />
              <img src={ite.image3} alt="" />
            </div>
            <hr />
            <div className="comments">
              <h5>comments</h5>
              {ite.comments.map(ite =>
                <div key={ite.id} className="comment">
                  <img src={ite.owner.profile_image} alt="profile-photo" />
                  <p>{ite.text}</p>
                </div>
              )}
            </div>
          </Modal.Body>
        </Modal>
      )}

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
            <span className="mark-icon"><i id={ite.id} onClick={handleModalChange} className="fas fa-map-pin"></i></span>
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