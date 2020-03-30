import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";



export function setCurrentUser(user) {
    // We send this to our redux reuser
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        dispatch(setCurrentUser({}));
    };
};

export function authUser(type, userData) {
    return dispatch => {
        //wrap our thunk in a promise so we can wait for the API call
        //wait until api call has finished before dispatching
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/auth/${type}`, userData).then(
                ({ token, ...user }) => {
                localStorage.setItem("jwtToken", token);
                dispatch(setCurrentUser(user));
                dispatch(removeError())
                resolve(); //indicate that API call succeeds
            })
            .catch(err => {
                console.log(err)
                dispatch(addError(err));
                reject(); //indicate the api failed
            });
        });
    };
}