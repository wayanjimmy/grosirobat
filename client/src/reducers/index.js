import { combineReducers } from 'redux'

import auth from './authReducer'
import unit from './unitReducer'
import product from './productReducer'

const rootReducer = combineReducers({
  auth,
  unit,
  product,
})

export default rootReducer
