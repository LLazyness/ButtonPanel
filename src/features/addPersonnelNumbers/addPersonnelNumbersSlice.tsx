import {createSlice} from '@reduxjs/toolkit';

export interface PersonnelNumbersType {
    personnelNumbers: string,
    isInitialized: boolean,
}

const initialState: PersonnelNumbersType= {
    personnelNumbers: "",
    isInitialized: false,
};

export const addPersonnelNumbersSlice = createSlice({
    name: 'duplicate',
    initialState,
    reducers: {
        setPersonnelNumbers: (state, action) => {
            state.personnelNumbers = action.payload
        },

        initialize: (state) => {
            state.isInitialized = true;
        },

        reset: () => {return initialState}
    }
});

export const { initialize, setPersonnelNumbers, reset } = addPersonnelNumbersSlice.actions;
export default addPersonnelNumbersSlice.reducer