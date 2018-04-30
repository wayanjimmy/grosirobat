import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Unit from './Unit'
import Login from './Login'
import * as authActions from '../actions/authActions'
import * as authUtil from '../utils/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUtil.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

class App extends React.Component {
  componentDidMount() {
    if (this.props.user.id === '' && authUtil.isAuthenticated()) {
      this.props.dispatch(authActions.me())
    }
  }

  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Unit} />
        <PrivateRoute path="/units" component={Unit} />
        <Route
          path="/login"
          render={() =>
            authUtil.isAuthenticated() ? <Redirect to="/" /> : <Login />
          }
        />
      </Switch>
    )
  }
}

export default connect(state => {
  const { user } = state.auth
  return { user }
})(App)
