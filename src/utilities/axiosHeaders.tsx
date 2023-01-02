import axios from 'axios'

export function setAuthHeader(token: string | null) {
  axios.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : ''
}