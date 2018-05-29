import get from 'lodash/get'

const initialState = {
  order: {
    id: '',
    number: '',
    customer_name: '',
    amount_paid: '',
    line_items: [],
  },
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
    const pagination = Object.assign(
      {},
      state.pagination,
      action.payload.data.meta.pagination
    )
    return {
      ...state,
      orders,
      pagination,
    }
  }

  if (action.type === 'GET_ORDER_FULFILLED') {
    const { order } = action.payload.data
    return {
      ...state,
      order,
    }
  }

  return state
}
