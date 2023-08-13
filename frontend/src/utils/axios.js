import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: import.meta.env.PROD ? "" : "http://localhost:4000",
});

export default axiosInstanse;
