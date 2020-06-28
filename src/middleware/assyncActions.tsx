import {modalClose, modalOpen} from '../features/modal/modalSlice';
import {initReturned} from "../features/showOnReview/showOnReviewSlice";
import {init, sendForReviewType} from "../features/sendForReview/sendForReviewSlice";
import {requestGet, requestGetFailure, requestGetSuccess} from "../features/api/apiSlice";
import {getAttachForReview, getAttachOnReview, getButtons, getDuplicates, sendForReviewHR} from "../api/api";
import {initButtons} from "../features/buttons/buttonSlice";
import {initDuplicates, initializedDuplicate} from "../features/duplicate/duplicateSlice";

export function fetchGet() {
    return (dispatch: any) => {
        dispatch (requestGet());
        return getButtons()
            .then((response) => {
                dispatch(initButtons(response.data));
                dispatch(requestGetSuccess());
            }).catch(function (error) {
                dispatch (requestGetFailure(error.response.data.errMsg));
            })
    }
}

export function loadAttachments() {
    return (dispatch: any) => {
        return getAttachForReview()
            .then((response) => {
                dispatch(init({nodes: response.data.nodes, reasons: response.data.reasons}));
                dispatch(requestGetSuccess());
                dispatch(modalOpen())
            }).catch(function (error) {
                dispatch(requestGetFailure(error.response.data.errMsg));
                dispatch(modalOpen());
            })
    }
}

export function loadReturnedAttachments() {
    return (dispatch: any) => {
        return getAttachOnReview()
            .then((response) => {
                dispatch(initReturned(response.data));
                dispatch(modalOpen());
            }).catch(function (error) {
                dispatch(requestGetFailure(error.response.data.errMsg));
                dispatch(modalOpen())
            })
    }
}

export function loadDuplicates() {
    return (dispatch: any) => {
        return getDuplicates()
            .then((response) => {
                dispatch(initDuplicates(response.data));
                dispatch(modalOpen());
            }).catch(function (error) {
                console.log("inside catch");
                dispatch(initializedDuplicate());
                dispatch(requestGetFailure(error.response.data.errMsg));
                dispatch(modalOpen())
            })
    }
}

export function submit(reviewState: sendForReviewType) {
    return (dispatch: any) => {
        return sendForReviewHR(reviewState)
            .then(() => {
                    dispatch(close());
                    document.location.reload(true);
                }
            )
            .catch((error) => {
                    dispatch(requestGetFailure(error.response.data.errMsg));
                    dispatch(modalOpen());
                }
            )
    }
}

export function close() {
    console.log("close modal");
    return (dispatch: any) => {
        dispatch(modalClose());
    }
}
