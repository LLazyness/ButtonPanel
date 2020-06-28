import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface elements {
    "id": number,
    "name": string,
    "flag": boolean,
    "reason": string,
    "comment": string,
    "isError": boolean,
}

interface error {
    error: string,
}

export interface sendForReviewType {
    elements: elements[],
    isInitialize: boolean,
    reasons: Array<string>,
    isSelectAll: boolean,
    isRequired: boolean,
    globalReason: string,
    globalComment: string,
}

const initialState: sendForReviewType & error = {
    elements: [],
    isInitialize: false,
    reasons: [],
    error: "Произошла ошибка при загрузке данных",
    isSelectAll: false,
    isRequired: false,
    globalReason: "",
    globalComment: "",
};

export const sendForReviewSlice = createSlice({
    name: 'sendForReview',
    initialState,
    reducers: {
        init(state, action) {
            state.isInitialize = true;
            state.reasons = action.payload.reasons;
            action.payload.nodes.map((value:any) => {
                state.elements.push({
                    "id": value.id,
                    "name": value.name,
                    "flag": false,
                    "reason": "",
                    "comment": "",
                    "isError": false
                })
            })
        },

        changeCheck(state, action: PayloadAction<number>) {
            if (!state.isSelectAll) {
                state.elements.map((element, index) => {
                    if (index === action.payload) {
                        element["flag"] = !element.flag;
                        element["isError"] = false;
                    }
                    return element
                })
            }
        },

        setReason(state, action) {
            state.elements.map((element, index) => {
                if (index === action.payload.index) {
                    element["reason"] = action.payload.reason;
                    element["isError"] = false;
                }
                return element
            })
        },

        setComment(state, action) {
            state.elements.map((element, index) => {
                if (index === action.payload.index) {
                    element["comment"] = action.payload.comment;
                }
                return element
            })
        },

        setError(state, action: PayloadAction<number>) {
            state.elements.map((element, index) => {
                if (index === action.payload) {
                    element["isError"] = true;
                }
                return element
            })
        },

        selectAll(state) {
            let currentGlobalCheck = state.isSelectAll;
            state.isSelectAll = !currentGlobalCheck;
            state.isRequired = false;
            state.elements.map((element) => {
                element["flag"] = !currentGlobalCheck;
                return element
            });
        },

        setGlobalReason(state, action: PayloadAction<string>) {
            state.globalReason = action.payload;
            state.isRequired = false;
        },

        setGlobalComment(state, action: PayloadAction<string>) {
            state.globalComment = action.payload;
        },

        setGlobalError(state) {
            state.isRequired = true;
        },

        reset() {
            return initialState;
        },
    }
});

export const {init, reset, changeCheck, setReason, setComment, setError, selectAll, setGlobalReason, setGlobalComment, setGlobalError} = sendForReviewSlice.actions;
export default sendForReviewSlice.reducer

