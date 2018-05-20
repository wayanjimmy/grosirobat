import Swal from 'sweetalert2'

import * as authUtil from '../utils/auth'

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
  },
}

export default function authReducer(state = initialState, action) {
  if (action.type === 'LOGIN_FULFILLED') {
    const res = action.payload.data
    authUtil.authenticate(res.auth_token)
  }

  if (action.type === 'LOGIN_REJECTED') {
    Swal('Oops', 'Invalid email or password!', 'error')
  }

  if (action.type === 'ME_FULFILLED') {
    const { user } = action.payload.data
    return {
      ...state,
      user,
    }
  }

  return state
}
