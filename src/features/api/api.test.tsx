import {apiSlice} from './apiSlice';

import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    api: apiSlice.reducer
});

const store: any = createStore(reducer);

describe('api', () => {
    it('requestGet', () => {
        store.dispatch(apiSlice.actions.requestGet());
        expect(store.getState()).toEqual(
            {
                api: {
                isLoading: true,
                responseStatus: false,
                error: "Ошибка при загрузке данных",
                isError: false,
                }
            }
        );
    });

    it('requestGetSuccess', () => {
        store.dispatch(apiSlice.actions.requestGetSuccess());
        expect(store.getState()).toEqual(
            {
                api: {
                    isLoading: false,
                    responseStatus: true,
                    error: "Ошибка при загрузке данных",
                    isError: false,
                }
            }
        );
    });

    it('requestGetFailed', () => {
        store.dispatch(apiSlice.actions.requestGetFailure());
        expect(store.getState()).toEqual(
            {
                api: {
                    isLoading: false,
                    responseStatus: false,
                    error: "Ошибка при загрузке данных",
                    isError: true,
                }
            }
        );
    });
});