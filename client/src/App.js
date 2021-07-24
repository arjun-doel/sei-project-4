import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import MapIndex from './components/maps/MapIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/maps/user/Profile'
import Favourites from './components/maps/user/Favourites'

const App = () => {
  return (
    <BrowserRouter>
      
      <Switch>
        
        <Route component={Favourites} path={'/favourites'} />
        <Route component={Profile} path={'/profile'} />
        <Route component={Login} path={'/login'} />
        <Route component={Register} path={'/register'} />
        <Route component={MapIndex} path={'/maps'} />
        <Route component={Home} path={'/'} />

      </Switch>

    </BrowserRouter>
  )
}

export default App