import request from '../utils/request'

export function getAllUnits() {
  return {
    type: 'GET_ALL_UNITS',
    payload: request().get('/api/units'),
  }
}
