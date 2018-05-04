const initialState = {
  products: [],
  pagination: {
    current_page: 1,
    prev_page: null,
    next_page: null,
    total_pages: 1,
    total_count: 0,
  },
}

export default function productReducer(state = initialState, action) {
  if (action.type === 'GET_ALL_PRODUCTS_FULFILLED') {
    const { products, meta: pagination } = action.payload.data
    return {
      ...state,
      products,
      pagination,
    }
  }

  return state
}
