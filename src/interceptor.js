import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3000/api';

axios.interceptors.request.use(
    (config) => {
        config.baseURL = baseUrl
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        return res
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axios