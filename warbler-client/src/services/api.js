import axios from "axios";

export function setTokenHeader(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer $[token]`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}


export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data).then(res => {
            // returning axios call into an object that we can work with
            return resolve(res.data);
        })
        .catch(err => {
            return reject(err.response.data.error);
        });
    });
}