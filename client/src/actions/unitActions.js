import request from '../utils/request'

export function getAllUnits() {
  return {
    type: 'GET_ALL_UNITS',
    payload: request().get('/api/units'),
  }
}

export function createUnit(unit) {
  return {
    type: 'CREATE_UNIT',
    payload: request().post('/api/units', unit),
  }
}

export function updateUnit(unit) {
  return {
    type: 'UPDATE_UNIT',
    payload: request().put(`/api/units/${unit.id}`, unit),
  }
}

export function destroyUnit(unit) {
  return {
    type: 'DESTROY_UNIT',
    payload: request().delete(`/api/units/${unit.id}`),
    meta: {
      unit
    }
  }
}
