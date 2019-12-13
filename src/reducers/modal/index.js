import {MODAL_CLOSE, MODAL_OPEN} from "../../actions/modal";

const initialModalState = {
    isOpen: false,
    func: undefined,
};

const modal = function(state = initialModalState, action) {
    switch (action.type) {
        case MODAL_OPEN:
            return { ...state, isOpen: true, func: action.func };
        case MODAL_CLOSE:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

export default modal;