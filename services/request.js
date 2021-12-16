import axios from 'axios'
import { notification } from 'antd'

const service = axios.create({
  baseURL: '',
  timeout: 30000,
})

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || ''
    token && (config.headers['Authorization'] = `Token ${token}`)
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
    // if (res.code !== 200) {
    //   if (res.code === 'E503' || res.code === 'E401') {
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('loginUserId')
    //     notification.error({ message: '错误', description: res.message })
    //     setTimeout(()=> {
    //       //todo logout
    //       return res
    //     }, 500)
    //   }
    //   notification.error({ message: '错误', description: res.message })
    //   throw new Error(res.message)
    // } else {
    //   return res
    // }
  }
)

export default service
