import request from '../utils/request'

export function getAllOrders(search) {
  if (search === '') {
    search = '?page=1'
  }
  return {
    type: 'GET_ALL_ORDERS',
    payload: request().get(`/api/orders${search}&per_page=5`),
  }
}
