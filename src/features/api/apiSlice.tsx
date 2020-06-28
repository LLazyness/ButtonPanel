import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from "@reduxjs/toolkit";

export interface apiType {
    isLoading: boolean,
    responseStatus: boolean,
    error: string,
    isError: boolean,
}

const initialState : apiType  = {
    isLoading: false,
    responseStatus: false,
    error: "Ошибка при загрузке данных",
    isError: false,
};

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {

        requestGet(state) {
            state.isLoading = true;
            state.responseStatus = false;
            state.isError = false;
        },

        requestGetSuccess(state) {
            state.isLoading = false;
            state.responseStatus = true;
            state.isError = false;
        },

        requestGetFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.responseStatus = false;
            state.isError = true;
            if (typeof action.payload === 'string') {
                state.error = action.payload;
            } else {
                state.error = initialState.error;
            }
        },
    }
});

export const {requestGet, requestGetSuccess, requestGetFailure} = apiSlice.actions;
export default apiSlice.reducer;
