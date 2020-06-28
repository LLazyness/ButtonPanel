import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import ModalComponent from "../modal";
import Error from "../modal/error";
import {reducers} from "../../types";
import Duplicate from "./duplicate";
import {loadDuplicates} from "../../middleware/assyncActions";

const DuplicateButton = function () {
    const dispatch = useDispatch();

    //open modal window
    const handleOpen = () => {
        dispatch(loadDuplicates());
    };

    const isError: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    const isInitialize: boolean = useSelector((state: reducers) => state.duplicateReducer.isInitialize);
    console.log("isInitialize is `${isInitialize}`" + isInitialize);

    console.log("error is `${error}`" + isError);

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleOpen}>
                Дубликат
            </button>

            {isInitialize &&
            <ModalComponent>
                {isError &&
                <Error/>
                }
                {!isError &&
                <Duplicate/>
                }
            </ModalComponent>
            }

            <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default DuplicateButton