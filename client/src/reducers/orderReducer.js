import get from 'lodash/get'

const initialState = {
  orders: [],
  pagination: {
    current_page: 1,
    prev_page: null,
    next_page: null,
    total_pages: 1,
    total_count: 0,
  },
}

export default function orderReducer(state = initialState, action) {
  if (action.type === 'GET_ALL_ORDERS_FULFILLED') {
    const orders = get(action, 'payload.data.orders', [])
    const pagination = Object.assign({}, action.payload.data.meta)
    return {
      ...state,
      orders,
      pagination,
    }
  }

  return state
}
