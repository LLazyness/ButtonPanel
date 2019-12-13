import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    changeFlag,
    setComment,
    setError,
    setReason,
    submit,
    selectAll,
    setGlobalReason, setGlobalComment, setGlobalError
} from "../../actions/Review/SendForReview";
import {modalClose} from "../../actions/Review/SendForReview"

import SendForReviewComponent from "../../component/FormComponent/SendForReviewComponent";

const SendForReviewForm = function () {
    const dispatch = useDispatch();
    const reasons = useSelector(state => state.reviewReducer.reasons);
    const checkboxes = useSelector(state => state.reviewReducer);

    const handleChange = (index) => () => {
        dispatch(changeFlag(index));
    };

    const changeReason = (index) => event => {
        dispatch(setReason(index, event.target.value));
    };

    const updateCommentValue = (index) => event => {
        dispatch(setComment(index, event.target.value))
    };

    const handleSubmit = () => {
        let ok = true;
        let activeCheckExist = false;
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
            });
        }

        if (ok && activeCheckExist) {
            dispatch(submit(checkboxes))
        }
    };

    const handleClose = () => {
        dispatch(modalClose())
    };

    const selectAllChange = () => {
        dispatch(selectAll())
    };

    const changeGlobalReason = () => (event) => {
        dispatch(setGlobalReason(event.target.value))
    };

    const changeGlobalComment = () => (event) => {
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