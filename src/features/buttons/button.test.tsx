import {buttonSlice} from './buttonSlice';

import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    api: buttonSlice.reducer
});

const store: any = createStore(reducer);

describe('button', () => {
    it('init', () => {
        store.dispatch(buttonSlice.actions.initButtons(
            {
                "hr": false,
                "kt": false,
                "outdated" : false,
            }
            ));
        expect(store.getState()).toEqual(
            {
                api: {
                    buttons: {
                        hr: false,
                        kt: false,
                        outdated: false,
                    },
                    isInitialize: true,
                }
            }
        );
    });
});