import React, { useEffect } from 'react'
import axios from 'axios'
import UserNav from './UserNav'

const Favourites = () => {
  // const [locationsData, setLocationsData] = useState([])


  const getItem = () => {
    const item = JSON.parse(localStorage.getItem('items'))
    const toNumber = item.map(ite => parseInt(ite))
    return toNumber
  }

  useEffect(() => {
    console.log('loads',getItem())
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/maps')
        console.log('data',typeof(data[0].id)) 
        const comparison = data.filter(ite => getItem().includes(parseFloat(ite.id)))
        console.log('f', comparison)
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
