import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Unit from './Unit'
import Login from './Login'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/units" component={Unit} />
      </Switch>
    )
  }
}

export default App
