import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import MapIndex from './components/maps/MapIndex'
import Register from './components/auth/Register'

const App = () => {
  return (
    <BrowserRouter>
      
      <Switch>

        <Route component={Register} path={'/register'} />
        <Route component={MapIndex} path={'/maps'} />
        <Route component={Home} path={'/'} />

      </Switch>

    </BrowserRouter>
  )
}

export default App