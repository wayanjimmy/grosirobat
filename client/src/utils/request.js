import axios from 'axios'
import has from 'lodash/has'

import { getAccessToken, logout } from './auth'

export default function request() {
  const token = getAccessToken()
  const ax = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  ax.interceptors.response.use(
    response => response,
    error => {
      if (has(error, 'response.status')) {
        if (error.response.status === 401) {
          logout(() => window.location.reload())
        }
      }
      return Promise.reject(error)
    }
  )

  return ax
}
