import {createSlice} from '@reduxjs/toolkit';

export interface removeKDInventoryType {
    text: string,
    isFetched: boolean
}

const initialState: removeKDInventoryType= {
    text: "Удалить все связанные описи?",
    isFetched: false
};

export const removeKDInventorySlice = createSlice({
    name: 'duplicate',
    initialState,
    reducers: {
        setText: (state) => {
            state.text = "Запрос на удаление отправлен";
            state.isFetched = true;
        }
    }
});

export const { setText} = removeKDInventorySlice.actions;
export default removeKDInventorySlice.reducer