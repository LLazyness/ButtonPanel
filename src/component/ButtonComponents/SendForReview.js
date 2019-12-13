import React from "react";
import {useDispatch} from "react-redux";
import {loadAttachments} from "../../actions/Review/SendForReview";

const SendForReview = function () {
    const dispatch = useDispatch();

    //open modal window
    const handleOpen = () => {
        dispatch(loadAttachments());
    };

    return (
        <React.Fragment>
            <button className="nnsod-actions-negative" type="button" onClick={handleOpen}>
                Вернуть на доработку
            </button>
            <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default SendForReview