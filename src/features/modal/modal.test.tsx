import {modalSlice} from './modalSlice';

import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    api: modalSlice.reducer
});

const store: any = createStore(reducer);

describe('duplicate', () => {

    it('modalOpen', () => {
        store.dispatch(modalSlice.actions.modalOpen());
        expect(store.getState()).toEqual(
            {
                api: {
                    isOpen: true,
                }
            }
        );
    });

    it('modalClose', () => {
        store.dispatch(modalSlice.actions.modalClose());
        expect(store.getState()).toEqual(
            {
                api: {
                    isOpen: false,
                }
            }
        );
    });
});