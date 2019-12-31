import axios from 'axios'

const clientApi = axios.create({
  baseURL: process.env.API
})

clientApi.interceptors.request.use((config) => {
  // config.headers['Tenant-Id'] = tenantId
  return config
}, (error) => {
  return Promise.reject(error)
})

export default clientApi
