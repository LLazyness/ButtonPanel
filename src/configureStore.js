import combineReducers from './reducers';
import { configureStore } from '@reduxjs/toolkit'

export default function Store() {
    return configureStore({
        reducer: combineReducers
        }
    );
}