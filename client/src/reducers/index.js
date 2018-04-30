import { combineReducers } from 'redux'

import auth from './authReducer'
import unit from './unitReducer'

const rootReducer = combineReducers({
  auth,
  unit,
})

export default rootReducer
