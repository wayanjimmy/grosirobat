import { combineReducers } from 'redux'

import auth from './authReducer'
import unit from './unitReducer'
import product from './productReducer'
import order from './orderReducer'

const rootReducer = combineReducers({
  auth,
  unit,
  product,
  order,
})

export default rootReducer
