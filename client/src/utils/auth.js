const ACC_TOKENKEY = 'GROSIROBAT_ACC_TOKEN'

export function isAuthenticated() {
  return !!localStorage.getItem(ACC_TOKENKEY)
}

export function authenticate(accessToken) {
  localStorage.setItem(ACC_TOKENKEY, accessToken)
}

export function logout(cb = () => {}) {
  localStorage.removeItem(ACC_TOKENKEY)
  cb()
}

export function getAccessToken() {
  return localStorage.getItem(ACC_TOKENKEY)
}
