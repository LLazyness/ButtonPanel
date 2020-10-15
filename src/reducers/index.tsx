import { combineReducers } from "redux";
import { polyfill } from 'es6-promise';
import modalReducer from '../features/modal/modalSlice';
import showOnReviewReducer from '../features/showOnReview/showOnReviewSlice';
import sendForReviewReducer from '../features/sendForReview/sendForReviewSlice';
import buttonReducer from '../features/buttons/buttonSlice';
import apiReducer from '../features/api/apiSlice';
import duplicateReducer from '../features/duplicate/duplicateSlice';
import duplicateVGOReducer from '../features/duplicateVGO/duplicateSlice';
import addPersonnelNumbersReducer from "../features/addPersonnelNumbers/addPersonnelNumbersSlice";

polyfill();

export default combineReducers({
    modalReducer,
    showOnReviewReducer,
    sendForReviewReducer,
    buttonReducer,
    apiReducer,
    duplicateReducer,
    duplicateVGOReducer,
    addPersonnelNumbersReducer
});
