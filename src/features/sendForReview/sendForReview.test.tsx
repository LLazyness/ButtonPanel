import {sendForReviewSlice} from './sendForReviewSlice';

import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    api: sendForReviewSlice.reducer
});

const store: any = createStore(reducer);

describe('sendForReview', () => {

    it('init', () => {
        let nodes = [];
        nodes.push({id: 1, name: 'test'});

        store.dispatch(sendForReviewSlice.actions.init({nodes}));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "",
                            "flag": false,
                            "id": 1,
                            "isError": false,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": false,
                    "reasons": undefined,
                }
            }
        );
    });

    it('changeCheck', () => {

        store.dispatch(sendForReviewSlice.actions.changeCheck(0));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "",
                            "flag": true,
                            "id": 1,
                            "isError": false,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": false,
                    "reasons": undefined,

                }
            }
        );
    });

    it('changeCheck', () => {

        store.dispatch(sendForReviewSlice.actions.changeCheck(0));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "",
                            "flag": false,
                            "id": 1,
                            "isError": false,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": false,
                    "reasons": undefined,

                }
            }
        );
    });

    it('setReason', () => {

        store.dispatch(sendForReviewSlice.actions.setReason(
            {
                id: 0,
                reason: "",
            }
        ));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "",
                            "flag": false,
                            "id": 1,
                            "isError": false,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": false,
                    "reasons": undefined,
                }
            }
        );
    });

    it('setComment', () => {

        store.dispatch(sendForReviewSlice.actions.setComment(
            {
                index: 0,
                comment: "test",
            }
        ));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "test",
                            "flag": false,
                            "id": 1,
                            "isError": false,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": false,
                    "reasons": undefined,
                }
            }
        );
    });

    it('setError', () => {

        store.dispatch(sendForReviewSlice.actions.setError(0));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "test",
                            "flag": false,
                            "id": 1,
                            "isError": true,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": false,
                    "reasons": undefined,
                }
            }
        );
    });

    it('selectAll', () => {

        store.dispatch(sendForReviewSlice.actions.selectAll());

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "test",
                            "flag": true,
                            "id": 1,
                            "isError": true,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": true,
                    "reasons": undefined,
                }
            }
        );
    });

    it('setGlobalReason', () => {

        store.dispatch(sendForReviewSlice.actions.setGlobalReason("test"));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "test",
                            "flag": true,
                            "id": 1,
                            "isError": true,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "",
                    "globalReason": "test",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": true,
                    "reasons": undefined,
                }
            }
        );
    });

    it('setGlobalComment', () => {

        store.dispatch(sendForReviewSlice.actions.setGlobalComment("test"));

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "test",
                            "flag": true,
                            "id": 1,
                            "isError": true,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "test",
                    "globalReason": "test",
                    "isInitialize": true,
                    "isRequired": false,
                    "isSelectAll": true,
                    "reasons": undefined,
                }
            }
        );
    });

    it('setGlobalError', () => {

        store.dispatch(sendForReviewSlice.actions.setGlobalError());

        expect(store.getState()).toEqual(
            {
                api: {
                    "elements": [
                        {
                            "comment": "test",
                            "flag": true,
                            "id": 1,
                            "isError": true,
                            "name": "test",
                            "reason": "",
                        }
                    ],
                    "error": "Произошла ошибка при загрузке данных",
                    "globalComment": "test",
                    "globalReason": "test",
                    "isInitialize": true,
                    "isRequired": true,
                    "isSelectAll": true,
                    "reasons": undefined,
                }
            }
        );
    });

    it('reset', () => {

        store.dispatch(sendForReviewSlice.actions.reset());

        expect(store.getState()).toEqual(
            {
                api: {
                    elements: [],
                    isInitialize: false,
                    reasons: [],
                    error: "Произошла ошибка при загрузке данных",
                    isSelectAll: false,
                    isRequired: false,
                    globalReason: "",
                    globalComment: "",
                }
            }
        );
    });
});
