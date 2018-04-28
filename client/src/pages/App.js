import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Unit from './Unit'
import Login from './Login'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Unit} />
        <Route path="/units" component={Unit} />
        <Route path="/login" component={Login} />
      </Switch>
    )
  }
}

export default App
