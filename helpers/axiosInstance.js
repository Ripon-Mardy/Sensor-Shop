import axios from "axios";

const axiosInstance = axios.create({
    baseURL : 'http://mathmozocms.test/api/v1',
    headers: {
        'Content-Type': 'application/json',
      },
})

export default axiosInstance