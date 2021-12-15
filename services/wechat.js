import axios from "./request"

export const weChatQrcode = (taskId)=> {
    return axios.post(`/api/account/wechat_scan_qrcode/`)
}

export const getScanInfo = (uid)=> {
    return axios.get(`/api/account/oauth2_user_info?uid=${uid}`)
}