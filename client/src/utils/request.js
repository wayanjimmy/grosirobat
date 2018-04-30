import axios from 'axios'

import { getAccessToken } from './auth'

export default function request() {
  const token = getAccessToken()
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
