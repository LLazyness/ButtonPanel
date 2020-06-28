import {useDispatch, useSelector} from "react-redux";
import {close} from "../../middleware/assyncActions";
import React from "react";
import ShowOnReviewForm from "./showOnReviewForm";
import {reset} from "./showOnReviewSlice";

const ShowOnReview = () => {
    const dispatch = useDispatch();
    const attachments = useSelector(state => state.showOnReviewReducer.returned);

    const handleClose = () => {
        dispatch(close());
        dispatch(reset());
    };

    const handleClick = () => {
        window.printCorrectionSheet(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    };

    return (
        <ShowOnReviewForm close={handleClose} open={handleClick} returned={attachments}/>
    )
};


export default ShowOnReview