import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

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

function currentUser(Component) {
  class CurrentUser extends React.Component {
    getCurrentUser() {
      if (authUtil.isAuthenticated && this.props.user.id === '') {
        this.props.dispatch(authActions.me())
      }
    }

    componentDidMount() {
      this.getCurrentUser()
    }

    componentDidUpdate(prevProps) {
      console.log(prevProps.location)
      if (this.props.location !== prevProps.location) {
        this.getCurrentUser()
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return compose(
    withRouter,
    connect(state => {
      const { user } = state.auth
      return { user }
    })
  )(CurrentUser)
}

const App = () => (
  <Switch>
    <Route
      path="/login"
      render={() =>
        authUtil.isAuthenticated() ? <Redirect to="/" /> : <Login />
      }
    />
    <PrivateRoute exact path="/" component={currentUser(Unit)} />
    <PrivateRoute path="/units" component={currentUser(Unit)} />
  </Switch>
)

export default App
