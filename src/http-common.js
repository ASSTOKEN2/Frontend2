import axios from 'axios'

export default
  axios.create({
    baseURL: "https://backend-d9u7.onrender.com",
    withCredentials: true
  })
