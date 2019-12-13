import {
    REQUEST_GET,
    REQUEST_GET_SUCCESS,
    REQUEST_GET_FAILURE
} from "../actions/actions";

const initialUserState = {
    isLoaded: false,
    serverData: {},
    responseStatus: false,
    error: [],
    nodes: [{"attach0": {"id": 1, "flag": false}}, {"attach1": {"id": 2, "flag": false}}, {"attach1": {"id": 2, "flag": false}}, {"attach1": {"id": 2, "flag": false}}, {"attach1": {"id": 2, "flag": false}}, {"attach1": {"id": 2, "flag": false}}, {"attach1": {"id": 2, "flag": false}}],
    reasons: ["Возвращена группой сканирования","2","3"],

};

const statusReducer = function(state = initialUserState, action) {
    switch (action.type) {
        case REQUEST_GET:
            return { ...state, isLoaded: true, responseStatus:false };
        case REQUEST_GET_SUCCESS:
            return { ...state, isLoaded: false, responseStatus: true, serverData: action.data };
        case REQUEST_GET_FAILURE:
            return { ...state, isLoaded: false, responseStatus: false, error: action.error };
        default:
            return state;
    }
};

export default statusReducer;
