import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

import rootReducer from './reducers'

export function configureStore(initialState = {}) {
  const middlewares = [thunk, promiseMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}
