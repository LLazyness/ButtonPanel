import {createSlice} from '@reduxjs/toolkit';

export interface modalType {
    isOpen: boolean
}

const initialState: modalType = {
    isOpen: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen(state) {
            state.isOpen= true;
        },
        modalClose(state) {
            state.isOpen = false;
        },
        reset: () => {return initialState}

    }
});

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer