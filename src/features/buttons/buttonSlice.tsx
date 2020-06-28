import {createSlice} from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        buttons: {},
        isInitialize: false,
    },
    reducers: {
        initButtons(state, action) {
            state.buttons = action.payload;
            state.isInitialize = true;
        }
    }
});

export const { initButtons } = buttonSlice.actions;
export default buttonSlice.reducer;