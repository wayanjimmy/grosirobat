import axios from 'axios'

export function login(email, password) {
  return dispatch => {
    dispatch({
      type: 'LOGIN',
      payload: axios.post('/api/authenticate', {
        email,
        password,
      }),
    })
  }
}

export function logout() {}
