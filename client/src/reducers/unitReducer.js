const initialState = {
  units: [],
}

export default function unitReducer(state = initialState, action) {
  if (action.type === 'GET_ALL_UNITS_FULFILLED') {
    const units = action.payload.data
    return {
      ...state,
      units,
    }
  }

  return state
}
