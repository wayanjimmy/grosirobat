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

export function createProduct(product) {
  return {
    type: 'CREATE_PRODUCT',
    payload: request().post('/api/products', product),
  }
}

export function updateProduct(product) {
  return {
    type: 'UPDATE_PRODUCT',
    payload: request().put(`/api/products/${product.id}`, product),
  }
}

export function destroyProduct(product) {
  return {
    type: 'DESTROY_PRODUCT',
    payload: request().delete(`/api/products/${product.id}`),
    meta: {
      product,
    },
  }
}
