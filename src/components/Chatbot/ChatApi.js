import axios from "axios";

export default
    axios.create({
        baseURL: "https://chatbot-apz7.onrender.com",
        withCredentials: true,

    })