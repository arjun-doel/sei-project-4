import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserNav from './UserNav'
import Fade from 'react-reveal/Fade'
import Rating from 'react-rating'

const Favourites = () => {
  const [locationsData, setLocationsData] = useState([])
  const [saved, setSaved] = useState(false)


  const getItem = () => {
    const item = JSON.parse(localStorage.getItem('items'))
    const toNumber = item.map(ite => parseInt(ite))
    return toNumber
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/maps')
        // console.log('data', typeof (data[0].id))
        const comparison = data.filter(ite => getItem().includes(parseFloat(ite.id)))
        setLocationsData(comparison)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const averageRating = () => {
    const commentsArray = locationsData.map(ite => ite.comments)
    console.log(typeof (locationsData[0].comments[0].rating))
    console.log('com array->', commentsArray[2])
    const average = commentsArray.reduce((acc, currentValue) => {
      return acc + currentValue.rating / 5
    }, 0)
    console.log(average)
    return Math.ceil(average)
  }

  const sortFavourites = () => {
    setSaved(!saved)
  }




  return (
    <>
      <UserNav />
      <div className="favourites-wrapper">
        <Fade top>
          <h1>your favourites...</h1>
        </Fade>
        {locationsData.map(ite =>
          <Fade key={ite.id} top>
            <div className="favourites-single">
              <div className="fav-header">
                <h3>{ite.name}</h3>
                {saved ? <i id={ite.id} onClick={sortFavourites} className="far fa-heart"></i> : <i id={ite.id} onClick={sortFavourites} className="fas fa-heart"></i>}
              </div>
              <div className="fav-short-text">
                <Rating
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                  className="rating-header"
                  initialRating={averageRating()}
                />
              </div>
              <div className="fav-descript">
                <p>{ite.description}</p>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </>
  )
}

export default Favourites
