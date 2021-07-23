import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import MapIndex from './components/maps/MapIndex'

const App = () => {
  return (
    <BrowserRouter>
      
      <Switch>

        <Route component={MapIndex} path={'/maps'} />
        <Route component={Home} path={'/'} />

      </Switch>

    </BrowserRouter>
  )
}

export default App