import axios from "./request"

export const accountMine = (uid)=> {
    return axios.get(`/api/account/mine/`)
}

export const accountLogin = (data)=> {
    return axios.post(`/api/account/login/`, data)
}

export const msgSend = (data)=> {
    return axios.post(`/api/msg/send/`, data)
}