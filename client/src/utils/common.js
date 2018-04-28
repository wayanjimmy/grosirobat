/* eslint-disable no-self-compare */

function is(x, y) {
  // SameValue algorithm
  // Steps 1-5, 7-10
  if (x === y) {
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y
  }
}

export function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function'
  }
  return false
}

/**
 * @function oneOf
 * @description Value checking modeled after React propType checking.
 */
export function oneOf(actual, expected) {
  if (!Array.isArray(expected)) {
    return new Error(
      `Invalid argument supplied to oneOfType: expected an instance of array`
    )
  }

  if (expected.filter(value => is(actual, value)).length === 0) {
    return false
  }

  return true
}

export function currency(amount) {
  amount = parseFloat(amount).toFixed(0)
  amount = amount.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')
  return 'Rp ' + amount
}
