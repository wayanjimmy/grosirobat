import axios from 'axios'

export function login(email, password) {
  return {
    type: 'LOGIN',
    payload: axios.post('/api/authenticate', {
      email,
      password,
    }),
  }
}

export function logout() {}
