import React, { useEffect } from 'react'
import axios from 'axios'
import UserNav from './UserNav'

const Favourites = () => {
  // const [locationsData, setLocationsData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const getItemsFromLocalStorage = JSON.parse(localStorage.getItem('items'))
        const { data } = await axios.get('/api/maps')
        const filterData = data.filter(ite => !getItemsFromLocalStorage.id.includes(ite.id))
        console.log(filterData)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  return (
    <>
      <UserNav />
    </>
  )
}

export default Favourites
