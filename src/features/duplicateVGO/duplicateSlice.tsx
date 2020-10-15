import {createSlice} from '@reduxjs/toolkit';

export interface DuplicateVGOType {
    id: number,
    name: string,
    link: string,
    isInitialized: boolean
}


const initialState: DuplicateVGOType= {
    id: 0,
    name: "",
    link: "",
    isInitialized: false
};

export const duplicateSlice = createSlice({
    name: 'duplicate',
    initialState,
    reducers: {
        setDuplicateVGONodeInfo: (state, action) => {
            action.payload.nodes.map((value: any) => {
                state.name = value.name;
                state.link = value.link;
                state.isInitialized = true;
            })
        },

        initialize: (state) => {
            state.isInitialized = true;
        },

        reset: () => {return initialState}
    }
});

export const { initialize, setDuplicateVGONodeInfo, reset } = duplicateSlice.actions;
export default duplicateSlice.reducer