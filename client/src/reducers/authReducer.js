import Swal from 'sweetalert2'

import * as authUtil from '../utils/auth'

const initialState = {
  loading: '',
  user: {
    id: '',
    name: '',
    email: '',
  },
}

export default function authReducer(state = initialState, action) {
  if (action.type === 'LOGIN_PENDING') {
    return {
      ...state,
      loading: 'login',
    }
  }

  if (action.type === 'LOGIN_FULFILLED') {
    const res = action.payload.data
    authUtil.authenticate(res.auth_token)
    return {
      ...state,
      loading: 'login_fulfilled',
    }
  }

  if (action.type === 'LOGIN_REJECTED') {
    Swal('Oops', 'Invalid email or password!', 'error')
    return {
      ...state,
      loading: 'login_rejected',
    }
  }

  return state
}
