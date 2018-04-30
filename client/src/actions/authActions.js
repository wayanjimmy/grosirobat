import axios from 'axios'

import request from '../utils/request'

export function login(email, password) {
  return {
    type: 'LOGIN',
    payload: axios.post('/api/authenticate', {
      email,
      password,
    }),
  }
}

export function me() {
  return {
    type: 'ME',
    payload: request().get('/api/me'),
  }
}

export function logout() {}
