import {useDispatch, useSelector} from "react-redux";
import {modalClose} from "../../actions/Review/SendForReview";
import React from "react";
import ShowOnReviewComponent from "../../component/FormComponent/ShowOnReviewComponent";

const ShowOnReview = () => {
    const dispatch = useDispatch();
    const attachments = useSelector(state => state.reviewReducer);

    const handleClose = () => {
        dispatch(modalClose())
    };

    const handleClick = () => {
        window.printCorrectionSheet(sessionStorage.getItem('URL'), sessionStorage.getItem('ID'), false);
    };

    return (
        <ShowOnReviewComponent close={handleClose} open={handleClick} elements={attachments.elements}/>
    )
};


export default ShowOnReview