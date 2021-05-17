import {modalClose, modalOpen} from '../features/modal/modalSlice';
import {initReturned} from "../features/showOnReview/showOnReviewSlice";
import {init, sendForReviewType} from "../features/sendForReview/sendForReviewSlice";
import {requestGet, requestGetFailure, requestGetSuccess} from "../features/api/apiSlice";
import {
    getAttachForReview,
    getAttachOnReview,
    getButtons,
    getDuplicates,
    sendForReviewHR,
    createDuplicateVGO,
    sendPersonnelNumbers, sendTax, sendRemoveKDInventoriesRequest
} from "../api/api";
import {initButtons} from "../features/buttons/buttonSlice";
import {initDuplicates, initializedDuplicate} from "../features/duplicate/duplicateSlice";
import {initialize, setDuplicateVGONodeInfo} from "../features/duplicateVGO/duplicateSlice";
import {setText} from "../features/removeKDInventory/removeButtonSlice";

export function fetchGet() {

    return (dispatch: any) => {
        dispatch (requestGet());
        return getButtons()
            .then((response) => {
                dispatch(initButtons(response.data));
                dispatch(requestGetSuccess());
                sessionStorage.setItem("ALREADY_RELOADED", "0");
            }).catch(function (error) {
                // maybe just problem with token, so refresh
                let reloaded: number | null = parseInt(sessionStorage.getItem("ALREADY_RELOADED") as string, 10);
                if (!reloaded || reloaded < 5) {
                    if (!reloaded) {
                        reloaded = 1;
                    } else {
                        reloaded += 1;
                    }
                    sessionStorage.setItem("ALREADY_RELOADED", String(reloaded));
                    document.location.reload();
                }
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

export function CreateDuplicateVGO(id: string | null) {
    return (dispatch: any) => {
        return createDuplicateVGO(id)
            .then((response) => {
                    dispatch(setDuplicateVGONodeInfo(response.data));
                    dispatch(modalOpen());
                }
            )
            .catch((error) => {
                    dispatch(requestGetFailure(error.response.data.errMsg));
                    dispatch(initialize());
                    dispatch(modalOpen());
                }
            )
    }
}

export function SubmitPersonnelNumbers(value: string) {
    return (dispatch: any) => {
        return sendPersonnelNumbers(value)
            .then(() => {
                dispatch(close());
                document.location.reload(true);
                }
            )
            .catch((error) => {
                    dispatch(requestGetFailure(error.response.data.errMsg));
                }
            )
    }
}

export function SendTaxHandler() {
    return (dispatch: any) => {
        return sendTax()
            .then(() => {
                    document.location.reload();
                }
            )
            .catch((error) => {
                    dispatch(requestGetFailure(error.response.data.errMsg));
                    dispatch(modalOpen())
                }
            )
    }
}

export function RemoveKDInventory() {
    return (dispatch: any) => {
        return sendRemoveKDInventoriesRequest()
            .then(() => {
                    dispatch(setText());
                }
            )
            .catch((error: any) => {
                    const errMsg = error.response.data.errMsg ? error.response.data.errMsg : error.message
                    dispatch(requestGetFailure(errMsg));
                    dispatch(modalOpen());
                }
            )
    }
}

export function close() {
    return (dispatch: any) => {
        dispatch(modalClose());
    }
}
