import * as React from 'react';
import {sendForReviewType} from "./features/sendForReview/sendForReviewSlice";
import {apiType} from "./features/api/apiSlice";
import {showOnReviewType} from "./features/showOnReview/showOnReviewSlice";
import {modalType} from "./features/modal/modalSlice";
import {duplicateInitialize, duplicateType} from "./features/duplicate/duplicateSlice";
import {DuplicateVGOType} from "./features/duplicateVGO/duplicateSlice";
import {PersonnelNumbersType} from "./features/addPersonnelNumbers/addPersonnelNumbersSlice";
import {removeKDInventoryType} from "./features/removeKDInventory/removeButtonSlice"

export interface reducers {
    removeKDInventoryReducer: removeKDInventoryType;
    addPersonnelNumbersReducer: PersonnelNumbersType;
    duplicateVGOReducer: DuplicateVGOType;
    sendForReviewReducer: sendForReviewType;
    apiReducer: apiType;
    showOnReviewReducer: showOnReviewType;
    modalReducer: modalType,
    duplicateReducer: duplicateType & duplicateInitialize,
}