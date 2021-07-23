import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'

const App = () => {
  return (
    <BrowserRouter>
      
      <Switch>

        <Route component={Home} path={'/'} />

      </Switch>

    </BrowserRouter>
  )
}

export default App