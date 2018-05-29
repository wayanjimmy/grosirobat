/* eslint-disable import/first */
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import Loadable from 'react-loadable'

import Loader from '../components/Loader'

const AsyncUnitList = Loadable({
  loader: () => import('./UnitList'),
  loading: Loader,
})
const AsyncProductList = Loadable({
  loader: () => import('./ProductList'),
  loading: Loader,
})
const AsyncOrderList = Loadable({
  loader: () => import('./OrderList'),
  loading: Loader,
})
const AsyncOrderDetail = Loadable({
  loader: () => import('./OrderDetail'),
  loading: Loader,
})
const AsyncLogin = Loadable({
  loader: () => import('./Login'),
  loading: Loader,
})

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
        authUtil.isAuthenticated() ? <Redirect to="/" /> : <AsyncLogin />
      }
    />
    <PrivateRoute exact path="/" component={currentUser(AsyncUnitList)} />
    <PrivateRoute path="/units" component={currentUser(AsyncUnitList)} />
    <PrivateRoute path="/products" component={currentUser(AsyncProductList)} />
    <PrivateRoute
      path="/orders"
      exact
      component={currentUser(AsyncOrderList)}
    />
    <PrivateRoute
      path="/orders/:id"
      component={currentUser(AsyncOrderDetail)}
    />
  </Switch>
)

export default App
