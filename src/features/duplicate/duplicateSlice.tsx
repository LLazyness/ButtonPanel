import {createSlice} from '@reduxjs/toolkit';

export interface duplicate {
    date: Date,
    user: string,
    name: string,
    link: string,
    type: string,
}

export interface duplicateType {
    duplicateAuthor: string,
    duplicates: duplicate[],
}

export interface duplicateInitialize {
    isInitialize: boolean,
}

const initialState: duplicateType & duplicateInitialize = {
    duplicateAuthor: "",
    duplicates: [],
    isInitialize: false,
};

export const duplicateSlice = createSlice({
    name: 'duplicate',
    initialState,
    reducers: {

        initDuplicates: (state, action) => {
            const {duplicateAuthor, duplicates} = action.payload;
            state.duplicateAuthor = duplicateAuthor;
            state.duplicates = duplicates;
            state.isInitialize = true;
        },

        initializedDuplicate: (state) => {
            state.isInitialize = true;
        },

        reset: () => {return initialState}

    }
});

export const { initDuplicates, reset, initializedDuplicate } = duplicateSlice.actions;
export default duplicateSlice.reducer