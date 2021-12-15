import axios from "./request"

export const upload = (data)=> {
    return axios.post('/api/common/upload/', data)
}

export const transFiles = (data)=> {
    return axios.post('/api/utility/trans_file/', data)
}

export const searchTask = (taskId)=> {
    return axios.get(`/api/utility/trans_file/${taskId}`)
}