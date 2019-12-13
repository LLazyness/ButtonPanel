import axios from "axios";

export const REQUEST_GET = 'REQUEST_GET';
export const REQUEST_GET_SUCCESS = 'REQUEST_GET_SUCCESS';
export const REQUEST_GET_FAILURE = 'REQUEST_GET_FAILURE';

function requestGet() {
    return {
        type: REQUEST_GET
    }
}

function requestSuccess(data) {
    return {
        type: REQUEST_GET_SUCCESS,
        data: data,
    }
}

function requestFailed(error) {
    return {
        type: REQUEST_GET_FAILURE,
        error: error,
    }
}

export function fetchGet() {
    return dispatch => {
        dispatch (requestGet());
        return axios({
            method: 'get',
            url: sessionStorage.getItem('URL') + '?func=nnsodwebui.displaybuttons&Id=' + sessionStorage.getItem("ID")
        }).then((response) => {
            dispatch (requestSuccess(response.data))
        }).catch(function (error) {
            dispatch (requestFailed(error));
        })
    }
}