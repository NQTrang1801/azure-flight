import axios from "axios";

const instance = axios.create({
    baseURL: "http://4.209.166.39:81/api"
});

// custom response
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
