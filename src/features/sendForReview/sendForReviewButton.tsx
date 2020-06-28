import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAttachments} from "../../middleware/assyncActions";
import SendForReviewForm from "./sendForReview";
import ModalComponent from "../modal";
import Error from "../modal/error";
import {reducers} from "../../types";

const SendForReviewButton = function () {
    const dispatch = useDispatch();

    //open modal window
    const handleOpen = () => {
        dispatch(loadAttachments());
    };

    const error: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    const isInitialize: boolean = useSelector((state: reducers) => state.sendForReviewReducer.isInitialize);

    return (
        <React.Fragment>
            <button className="nnsod-actions-negative" type="button" onClick={handleOpen}>
                Вернуть на доработку
            </button>

            {isInitialize &&
            <ModalComponent>
                {error &&
                <Error/>
                }
                {!error &&
                <SendForReviewForm/>
                }
            </ModalComponent>
            }

            <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default SendForReviewButton