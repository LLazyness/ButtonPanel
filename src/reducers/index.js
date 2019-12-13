import { combineReducers } from "redux";
import statusReducer from "./ServerData";
import modal from "./modal"
import { polyfill } from 'es6-promise';
import reviewReducer from "./Review/SendForReview"

polyfill();

export default combineReducers({
    statusReducer,
    modal,
    reviewReducer
});
