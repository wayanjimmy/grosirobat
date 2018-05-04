import request from '../utils/request'

export function getAllProducts() {
  return {
    type: 'GET_ALL_PRODUCTS',
    payload: request().get('/api/products?per_page=5'),
  }
}
