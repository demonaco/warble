import axios from "axios";

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method](path, data).then(res => {
            // returning axios call into an object that we can work with
            return resolve(res.data);
        })
        .catch(err => {
            return reject(err.response.data.error);
        });
    });
}