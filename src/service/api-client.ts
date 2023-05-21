import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "82e790cee5fa4bea8da7d71b7e9cf2a1"
    }
})