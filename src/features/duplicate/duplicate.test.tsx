import {duplicateSlice} from './duplicateSlice';

import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    api: duplicateSlice.reducer
});

const store: any = createStore(reducer);

describe('duplicate', () => {

    it('initializedDuplicate', () => {
        store.dispatch(duplicateSlice.actions.initializedDuplicate());
        expect(store.getState()).toEqual(
            {
                api: {
                    duplicateAuthor: "",
                    duplicates: [],
                    isInitialize: true,
                }
            }
        );
    });

    it('initDuplicates', () => {
        store.dispatch(duplicateSlice.actions.initDuplicates(
            {
                duplicateAuthor: "TestUser",
                duplicates: [
                    {
                        date: new Date('1995-12-17T03:24:00'),
                        user: "test",
                        name: "name1",
                        link: "link1",
                        type: "Дубликат",
                    }
                ],
            }
        ));
        expect(store.getState()).toEqual(
            {
                api: {
                    duplicateAuthor: "TestUser",
                    duplicates: [
                        {
                            date: new Date('1995-12-17T03:24:00'),
                            user: "test",
                            name: "name1",
                            link: "link1",
                            type: "Дубликат",
                        }
                    ],
                    isInitialize: true,
                }
            }
        );
    });
});