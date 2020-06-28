import {createSlice} from '@reduxjs/toolkit';

interface returned {
    "name": string,
    "returnReason": string,
    "returnPerson": string,
}

export interface showOnReviewType {
    returned: returned[],
    isInitialize: boolean,
}

const initialState: showOnReviewType = {
    returned: [],
    isInitialize: false,
};

const showOnReviewSlice = createSlice({
    name: 'showOnReview',
    initialState,
    reducers: {
        initReturned(state, action) {
            action.payload.nodes.map((value: any) => {
                    state.returned.push({
                        "name": value.name,
                        "returnReason": value.returnReason,
                        "returnPerson": value.returnPerson
                    });
                }
            );
            state.isInitialize = true;
        },
        reset:  () => { return initialState }
    }
});

export const {initReturned, reset} = showOnReviewSlice.actions;
export default showOnReviewSlice.reducer;