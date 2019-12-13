import {
    INIT,
    CHANGE_CHECK,
    SET_REASON,
    SET_ERROR,
    RESET_STATE,
    SET_COMMENT,
    LOAD_ATTACH_SUCCESS,
    LOAD_ATTACH_FAILED,
    INIT_RETURNED, SELECT_ALL, SET_GLOBAL_ERROR, SET_GLOBAL_COMMENT, SET_GLOBAL_REASON, CHANGE_GLOBAL_CHECK,
} from "../../actions/Review/SendForReview";

const initialState = {
    elements: [],
    isInitialize: false,
    reasons: [],
    nodes: [],
    error: "",
    isSelectAll: false,
    isRequired: false,
    globalReason: "",
    globalComment: "",
};

const reviewReducer = function (state = initialState, action) {
    switch (action.type) {
        case INIT:
            return {
                ...state, isInitialize: true,
                elements: [...state.elements, {
                    "id": action.id,
                    "name": action.name,
                    "flag": false,
                    "reason": "",
                    "comment": "",
                    "isError": false
                }]
            };

        case INIT_RETURNED:
            return {
                ...state, isInitialize: true,
                elements: [...state.elements, {
                    "name": action.name,
                    "returnReason": action.returnReason,
                    "returnPerson": action.returnPerson
                }]
            };

        case LOAD_ATTACH_SUCCESS:
            return {
                ...state,
                isInitialize: true,
                nodes: action.nodes,
                reasons: action.reasons,
            };

        case LOAD_ATTACH_FAILED:
            return {
                ...state,
                isInitialize: false,
                error: action.error
            };

        case CHANGE_CHECK:
            //if allSelect is active, shouldn't uncheck other
            if (state.isSelectAll) {
                return state
            } else {
                return {
                    ...state,
                    elements: state.elements.map((element, index) => {
                        if (index === action.index) {
                            element["flag"] = !element.flag;
                            element["isError"] = false;
                        }
                        return element
                    })
                };
            }

        case SET_REASON:
            return {
                ...state,
                elements: state.elements.map((element, index) => {
                    if (index === action.index) {
                        element["reason"] = action.reason;
                        element["isError"] = false;
                    }
                    return element
                })
            };

        case SET_COMMENT:
            return {
                ...state,
                elements: state.elements.map((element, index) => {
                    if (index === action.index) {
                        element["comment"] = action.comment;
                    }
                    return element
                })
            };

        case SET_ERROR:
            return {
                ...state,
                elements: state.elements.map((element, index) => {
                    if (index === action.index) {
                        element["isError"] = true;
                    }
                    return element
                })
            };

        case SELECT_ALL:
            let currentGlobalCheck = state.isSelectAll;
            return {
                ...state, isSelectAll: !currentGlobalCheck, isRequired: false,
                elements: state.elements.map((element) => {
                    element["flag"] = !currentGlobalCheck;
                    return element
                })
            };

        case SET_GLOBAL_REASON:
            return {
                ...state,
                globalReason: action.reason,
                isRequired: false,
            };

        case SET_GLOBAL_COMMENT:
            return {
                ...state,
                globalComment: action.comment,
            };

        case SET_GLOBAL_ERROR:
            return {
                ...state,
                isRequired: true
            };

        case RESET_STATE:
            return state = initialState;

        default:
            return state
    }
};
export default reviewReducer;
