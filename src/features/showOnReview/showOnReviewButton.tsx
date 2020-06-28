import * as React from "react";
import {loadReturnedAttachments} from "../../middleware/assyncActions";
import {useDispatch, useSelector} from "react-redux";
import Error from "../modal/error";
import ModalComponent from "../modal";
import ShowOnReview from "./showOnReview";
import {reducers} from "../../types";

const ShowOnReviewButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadReturnedAttachments());
    };

    const error: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    const isInitialize: boolean = useSelector((state: reducers) => state.showOnReviewReducer.isInitialize);

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleClick}>
                Корректируемые документы
            </button>

            {isInitialize &&
            <ModalComponent>
                {error &&
                <Error/>
                }
                {!error &&
                <ShowOnReview/>
                }
            </ModalComponent>
            }
        </React.Fragment>
    )
};

export default ShowOnReviewButton
