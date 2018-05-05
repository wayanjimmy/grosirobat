import request from '../utils/request'

export function getAllProducts(search) {
  if (search === '') {
    search = '?page=1'
  }
  return {
    type: 'GET_ALL_PRODUCTS',
    payload: request().get(`/api/products${search}&per_page=5`),
  }
}
