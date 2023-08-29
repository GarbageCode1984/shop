import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: import.meta.env.PROD ? "" : "http://localhost:4000",
});

axiosInstanse.interceptors.request.use(
    function (config) {
        config.headers.Authorization =
            "Bearer " + localStorage.getItem("accessToken");
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

axiosInstanse.interceptors.response.use(
    function (response) {
        return response;
    },
    function (err) {
        if (err.response.data === "jwt expired") {
            window.location.reload();
        }

        return Promise.reject(err);
    }
);

export default axiosInstanse;
