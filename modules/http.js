import axios from "axios"

const url = 'http://localhost:5050'


export const postData = async (path, body) => {
   const res = await axios.post(url + path, body)

   if (res.status === 200 || res.status === 201) {
      return res
   }
}


export const getData = async (path) => {
   const res = await axios.get(url + path)

   if (res.status === 200 || res.status === 201) {
      return res
   }
}


export const patchData = async (path, body) => {
   const res = await axios.patch(url + path, body)

   if (res.status === 200 || res.status === 201) {
      return res
   }
}