import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: import.meta.env.PROD ? "" : "http://localhost:5173",
});

export default axiosInstanse;
