import React from "react";
import {loadReturnedAttachments} from "../../actions/Review/SendForReview";
import {useDispatch} from "react-redux";

const ShowOnReview = () =>{
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadReturnedAttachments());
    };

        return (
            <React.Fragment>
                <button className="nnsod-actions-neutral" type="button" onClick={() => handleClick()}>
                    Корректируемые документы
                </button>
            </React.Fragment>
        )

};

export default ShowOnReview
