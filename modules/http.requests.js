import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL


export const postData = async (path, body) => {
    try {
        const res = await axios.post(BASE_URL + path, body)
        if (res.status === 200 || res.status === 201) {
            return res
        }

    } catch (e) {
        return e
    }
}

export const getData = async (path) => {
    try {
        const res = await axios.get(BASE_URL + path)
        if (res.status === 200 || res.status === 201) {
            return res
        }

    } catch (e) {
        return e
    }
}
export const patchData = async (path, body) => {
    try {
        const res = await axios.patch(BASE_URL + path, body)
        if (res.status === 200 || res.status === 201) {
            return res
        }

    } catch (e) {
        return e
    }
}