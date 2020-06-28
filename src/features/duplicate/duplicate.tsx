import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {close, fetchGet} from "../../middleware/assyncActions";
import {duplicateType, reset} from "./duplicateSlice";
import {reducers} from "../../types";
import DuplicateForm from "./duplicateForm";

const Duplicate = function () {
    const dispatch = useDispatch();

    const state: duplicateType = useSelector((state: reducers) => state.duplicateReducer);

    const handleClose = () => {
        dispatch(close());
        dispatch(reset());
        dispatch(fetchGet());
    };

    return (
        <DuplicateForm
            duplicateAuthor={state.duplicateAuthor}
            duplicates ={state.duplicates}
            close={handleClose}
        />
    );
};

export default Duplicate;