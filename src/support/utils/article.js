import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: 'https://reqres.in/api', // api 的 base_url
  timeout: 5000 // request timeout
})

export function fetchList (query) {
  return service({
    url: '/users',
    method: 'get',
    params: query
  })
}
