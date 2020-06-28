import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {submit} from "../../middleware/assyncActions";
import {close} from "../../middleware/assyncActions";

import {
    sendForReviewType,
    changeCheck,
    reset,
    selectAll,
    setComment,
    setError,
    setGlobalComment, setGlobalError,
    setGlobalReason,
    setReason
} from "./sendForReviewSlice";

import SendForReviewComponent from "./sendForReviewForm";
import {reducers} from "../../types";



const SendForReviewForm = function () {
    const dispatch = useDispatch();
    const reasons: Array<string> = useSelector((state:reducers) => state.sendForReviewReducer.reasons);
    const checkboxes: sendForReviewType = useSelector((state:reducers) => state.sendForReviewReducer);

    const handleChange = (index: number) => () => {
        dispatch(changeCheck(index));
    };

    const changeReason = (index: number) => (event: any) => {
        dispatch(setReason({index: index, reason: event.target.value}));
    };

    const updateCommentValue = (index: number) => (event: any) => {
        dispatch(setComment({index: index, comment: event.target.value}));
    };

    const handleSubmit = () => {
        let ok: boolean = true;
        let activeCheckExist: boolean = false;
        if (checkboxes.isSelectAll) {
            //checkbox selectAll is active then all checkboxes is active, check only one reason and comment
            if (checkboxes.globalReason.length < 1) {
                dispatch(setGlobalError());
                ok = false;
            }
            activeCheckExist = true;
        } else {
            //check only active checkboxes
            checkboxes.elements.map((element, index) => {
                if (element.flag) {
                    if (element.reason.length < 1) {
                        dispatch(setError(index));
                        ok = false
                    }
                    activeCheckExist = true
                }
                return
            });
        }

        if (ok && activeCheckExist) {
            dispatch(submit(checkboxes))
        }
    };

    const handleClose = () => {
        dispatch(close());
        dispatch(reset())
    };

    const selectAllChange = () => {
        dispatch(selectAll())
    };

    const changeGlobalReason = () => (event:any) => {
        dispatch(setGlobalReason(event.target.value))
    };

    const changeGlobalComment = () => (event:any) => {
        dispatch(setGlobalComment(event.target.value))
    };

    return (
        <SendForReviewComponent
            handleClose = {handleClose}
            handleChange = {handleChange}
            changeReason = {changeReason}
            updateCommentValue = {updateCommentValue}
            handleSubmit = {handleSubmit}
            selectAllChange = {selectAllChange}
            changeGlobalReason = {changeGlobalReason}
            changeGlobalComment = {changeGlobalComment}
            reasons = {reasons}
            isInitialize = {checkboxes.isInitialize}
            isSelectAll = {checkboxes.isSelectAll}
            elements = {checkboxes.elements}
            isRequired = {checkboxes.isRequired}
            globalReason = {checkboxes.globalReason}
            globalComment = {checkboxes.globalComment}
         />
    );
};

export default SendForReviewForm