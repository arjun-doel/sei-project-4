import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Rating from 'react-rating'
import Collapse from 'react-bootstrap/Collapse'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../hooks/auth'
import useLocalStorage from '../hooks/useLocalStorage'
import { ToastContainer, toast } from 'react-toastify'
import Fade from 'react-reveal'

const MainModal = ({ id, name, image1, image2, image3, description, owner, comments, address, city, country, postCode, price, type, lgShow, setLgShow }) => {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  const [commentData, setCommentData] = useState({
    text: '',
    rating: 0,
    location: id,
  })

  //* Favourites State
  const [localStorageItem, setLocalStorageItem] = useLocalStorage('items', [])

  // eslint-disable-next-line no-unused-vars
  const [currentComments, setCurrentComments] = useState(comments)

  // setCurrentComments(comments)
  console.log('current', currentComments)

  const handleChange = (event) => {
    const newCommentData = { ...commentData, [event.target.name]: event.target.value }
    setCommentData(newCommentData)
  }

  const handleRatingChange = value => {
    const ratingValue = value
    const commentDataWithRating = { ...commentData, rating: ratingValue }
    setCommentData(commentDataWithRating)
  }

  const handleCommentSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/comments/', commentData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      console.log(data)
      setCurrentComments([...currentComments, data])
      setCommentData({
        text: '',
        rating: 0,
        location: id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const averageRating = () => {
    const average = comments.reduce((acc, currentValue) => {
      return acc + parseInt(currentValue.rating) / 5
    }, 0)
    return Math.ceil(average)
  }

  const priceTags = () => {
    // eslint-disable-next-line prefer-const
    let money = []
    for (let i = 0; i < price; ++i) {
      money.push(<i>£</i>)
    }
    return money
  }

  const addToLocalStorage = (userInput) => {
    const newLocalStorageItems = [...localStorageItem, userInput]
    setLocalStorageItem(newLocalStorageItems)
    toast.success('This location is now saved to your favourites.')
    setSaved(!saved)
  }

  const addToFavourites = e => {
    const userInput = e.target.id
    const items = JSON.parse(localStorage.getItem('items'))
    if (!items) {
      addToLocalStorage(userInput)
    } else {
      addToLocalStorage(userInput)
    }
    // console.log(typeof(items[0]))
    // const alreadyInLocalStorage = items.some(i => i.id.includes(userInput))
    // if (alreadyInLocalStorage){
    //   const filterOutId = items.filter(ite => ite.id !== userInput)
    //   setLocalStorageItem(filterOutId)
    //   toast.warning('location has been removed from your favourites')
    //   setSaved(!saved)
    // } else {
    //   const newLocalStorageItems = [...localStorageItem, userInput]
    //   setLocalStorageItem(newLocalStorageItems)
    //   toast.success('This location is now saved to your favourites.')
    //   setSaved(!saved)
    // }
  }

  console.log('the main comments', currentComments)

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
        key={id}
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="info-modal"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className="modal-info-header">
              {name}
              {!saved ? <i id={id} onClick={addToFavourites} className="far fa-heart"></i> : <i id={id} onClick={addToFavourites} className="fas fa-heart"></i>}
            </div>
            <div className="main-ratings">
              <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
                className="rating-header"
                initialRating={averageRating()}
              />
              
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="short-info">
            <span className="loc-type">{type}</span>
            {/* <span className="opening-times"><strong><i className="far fa-clock"></i></strong> 9am - 6pm</span> */}
            <p className="price-header">{priceTags()}</p>
          </div>
          <hr />
          <h5 className="modal-address" aria-controls="example-collapse-text" onClick={() => setOpen(!open)} aria-expanded={open}>
            address
            {!open ? <i className="fas fa-chevron-circle-down"></i> :
              <i className="fas fa-chevron-circle-up"></i>}
          </h5>
          <Collapse in={open}>
            <div className="main-address-modal">
              <p>{address}
                <br />
                {city}
                <br />
                {postCode}
                <br />
                {country}
              </p>
            </div>
          </Collapse>
          <hr />
          <div className="modal-description">
            <p>{description}</p>
            <span><strong>posted by</strong> @{owner.username}</span>
          </div>
          <hr />
          <div className="modal-gallery">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
          <hr />
          <div className="comments">
            <h5>comments</h5>
            {currentComments.map(ite =>
              <Fade collapse key={ite.created_at}>
                <div className="comment">
                  <img src={ite.owner.profile_image} alt="profile-photo" />
                  <div className="comm-text">
                    <Rating
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      initialRating={ite.rating}
                      className="comment-rating"
                      readonly
                    />
                    <p className="main-text">{ite.text}</p>
                    <p className="poster"> <strong>posted by</strong> @{ite.owner.username}</p>
                  </div>
                </div>
              </Fade>
            )}
            <hr />
            <div className="add-comment">
              <h5>add a comment..</h5>
              <div className="form-comment">
                <Form onSubmit={handleCommentSubmit}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Rating
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      // value={commentData.rating}
                      initialRating={commentData.rating}
                      className="form-comment-rating"
                      onChange={handleRatingChange}
                      name="rating"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="main-comment-text" as="textarea" rows={3} name="text" value={commentData.text} onChange={handleChange} placeholder="add your comment here..." />
                  </Form.Group>
                  <button className="submit-comment">submit</button>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MainModal
