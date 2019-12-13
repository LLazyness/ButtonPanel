import {close, open} from "../modal"
import axios from "axios";
import SendForReviewForm from "../../container/ButtonLogic/SendForReview";
import React from "react";
import Error from "../../component/Modal/Error";
import ShowOnReview from "../../container/ButtonLogic/ShowOnReview";

export const INIT = 'INIT';
export const INIT_RETURNED = 'INIT_RETURNED';
export const CHANGE_CHECK = 'CHANGE_CHECK';
export const SET_REASON = 'SET_REASON';
export const SET_ERROR = 'SET_ERROR';
export const SET_COMMENT = 'SET_COMMENT';
export const CHANGE_GLOBAL_CHECK = 'CHANGE_GLOBAL_CHECK';
export const SET_GLOBAL_REASON = 'SET_GLOBAL_REASON';
export const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR';
export const SET_GLOBAL_COMMENT = 'SET_GLOBAL_COMMENT';
export const RESET_STATE = 'RESET_STATE';
export const LOAD_ATTACH_SUCCESS = 'LOAD_ATTACH_SUCCESS';
export const LOAD_ATTACH_FAILED = 'LOAD_ATTACH_FAILED';
export const SELECT_ALL = 'SELECT_ALL';

export function init(value) {
    return {
        type: INIT,
        id: value.id,
        name: value.name,
    }
}

function initReturned(value) {
    return {
        type: INIT_RETURNED,
        name: value.name,
        returnReason: value.returnReason,
        returnPerson: value.returnPerson,
    }
}

function loadAttachSuccess(nodes, reasons) {
    return {
        type: LOAD_ATTACH_SUCCESS,
        nodes: nodes,
        reasons: reasons,
    }
}

function loadAttachFailed(error) {
    return {
        type: LOAD_ATTACH_FAILED,
        error: error
    }
}

export function loadAttachments() {
    return dispatch => {
        return axios({
            method: 'get',
            url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getAttachForReview&Id=' + sessionStorage.getItem("ID")
        }).then((response) => {
            dispatch(loadAttachSuccess(response.data.nodes, response.data.reasons));
            response.data.nodes.map((element) => dispatch(init(element)));
            const func = <SendForReviewForm/>;
            dispatch(open(func))
        }).catch(function (error) {
            dispatch(loadAttachFailed(error.response.data.errMsg));
            const func = <Error/>;
            dispatch(open(func))
        })
    }
}

export function loadReturnedAttachments() {
    return dispatch => {
        return axios({
            method: 'get',
            url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getAttachOnReview&Id=' + sessionStorage.getItem("ID")
        }).then((response) => {
            dispatch(loadAttachSuccess(response.data.nodes));
            response.data.nodes.map((element) => dispatch(initReturned(element)));
            const func = <ShowOnReview />;
            dispatch(open(func))
        }).catch(function (error) {
            dispatch(loadAttachFailed(error.response.data.errMsg));
            const func = <Error/>;
            dispatch(open(func))
        })
    }
}

export function changeFlag(index) {
    return {
        type: CHANGE_CHECK,
        index: index,
    }
}

export function setReason(index, reason) {
    return {
        type: SET_REASON,
        index: index,
        reason: reason,
    }
}

export function setComment(index, comment) {
    return {
        type: SET_COMMENT,
        index: index,
        comment: comment,
    }
}

export function selectAll() {
    return {
        type: SELECT_ALL
    }
}

export function setGlobalReason(reason) {
    return {
        type: SET_GLOBAL_REASON,
        reason: reason,
    }
}

export function setGlobalComment(comment) {
    return {
        type: SET_GLOBAL_COMMENT,
        comment: comment,
    }
}

export function setGlobalError() {
    return {
        type: SET_GLOBAL_ERROR
    }
}

export function submit(reviewState) {
    return dispatch => {
        return axios.post(sessionStorage.getItem('URL') + '?func=nnsodwebui.sendForReviewHR', 'func=nnsodwebui.sendForReviewHR&state=' + JSON.stringify(reviewState) + '&id=' + sessionStorage.getItem("ID"))
            .then(() => {
                    dispatch(modalClose());
                    document.location.reload(true);
                }
            )
            .catch((error) => {
                    dispatch(loadAttachFailed(error.response.data.errMsg));
                    const func = <Error/>;
                    dispatch(open(func))
                }
            )
    }
}

export function setError(index) {
    return {
        type: SET_ERROR,
        index: index
    }
}

export function resetState() {
    return {
        type: RESET_STATE
    }
}

export function modalClose() {
    return dispatch => {
        dispatch(close());
        dispatch(resetState())
    }
};
