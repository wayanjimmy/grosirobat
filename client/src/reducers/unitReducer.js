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

  if (action.type === 'UPDATE_UNIT_FULFILLED') {
    const updatedUnit = action.payload.data
    return {
      ...state,
      units: state.units.map(unit => {
        if (unit.id === updatedUnit.id) {
          return updatedUnit
        }
        return unit
      }),
    }
  }

  if (action.type === 'CREATE_UNIT_FULFILLED') {
    const createdUnit = action.payload.data
    return {
      ...state,
      units: [...state.units, createdUnit],
    }
  }

  if (action.type === 'DESTROY_UNIT_FULFILLED') {
    const { unit: destroyedUnit } = action.meta
    return {
      ...state,
      units: state.units.filter(unit => unit.id !== destroyedUnit.id),
    }
  }

  return state
}
