import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

import rootReducer from './reducers'
import { isPromise, oneOf } from './utils/common'

function errorMiddleware() {
  return next => action => {
    const types = ['GLOBAL_ERROR']

    if (!isPromise(action.payload)) {
      return next(action)
    }

    if (oneOf(action.type, types)) {
      return next(action).catch(err => {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            `${action.type} caught at middleware with reason: ${JSON.stringify(
              err.message
            )}.`
          )
        }

        return err
      })
    }

    return next(action)
  }
}

export function configureStore(initialState = {}) {
  const middlewares = [thunk, logger, errorMiddleware, promiseMiddleware()]
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}
