import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Rating from 'react-rating'
import Collapse from 'react-bootstrap/Collapse'

const MainModal = ({ id, name, image1, image2, image3, description, owner, comments, address, city, country, postCode, lgShow, setLgShow }) => {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  const averageRating = () => {
    const average = comments.reduce((acc, currentValue) => {
      return acc + parseInt(currentValue.rating) / 5
    }, 0)
    return Math.ceil(average)
  }

  const priceTags = () => {
    // eslint-disable-next-line prefer-const
    let money = []
    for (let i = 0; i < 3; ++i) {
      money.push(<i>£</i>)
    }
    return money
  }

  const addToFavourites = () => {
    setSaved(!saved)
  }

  return (
    <>
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
              {!saved ? <i onClick={addToFavourites} className="far fa-heart"></i> : <i onClick={addToFavourites} className="fas fa-heart"></i>}
            </div>
            <div className="main-ratings">
              <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
                className="rating-header"
                initialRating={averageRating()}
              />
              <p className="price-header">{priceTags()}</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="short-info">
            <span className="loc-type">food - dinner</span>
            <span className="opening-times"><strong><i className="far fa-clock"></i></strong> 9am - 6pm</span>
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
            {comments.map(ite =>
              <div key={ite.id} className="comment">
                <img src={ite.owner.profile_image} alt="profile-photo" />
                <div className="comm-text">
                  <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={ite.rating}
                    readonly
                  />
                  <p className="main-text">{ite.text}</p>
                  <p className="poster"> <strong>posted by</strong> @{ite.owner.username}</p>
                </div>
              </div>
            )}
            <hr />
            <div className="add-comment">
              <h5>add a comment..</h5>
              <div className="form-comment">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Rating
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="add your comment here..." />
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
