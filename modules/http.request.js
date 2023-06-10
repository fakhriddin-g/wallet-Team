import axios from 'axios'

export const postData = async () => {
    try {
        const res = await axios.post(path, body)
        if (res.status === 200 || res.status === 201) {
            return res
        }

    } catch (e) {
        alert("error " + e)
    }
}