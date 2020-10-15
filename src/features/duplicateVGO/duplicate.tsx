import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {close} from "../../middleware/assyncActions";
import {reset} from "./duplicateSlice";
import {reducers} from "../../types";
import DuplicateForm from "./duplicateForm";

const Duplicate = function () {
    const dispatch = useDispatch();

    const state = useSelector((state: reducers) => state.duplicateVGOReducer);

    const handleClose = () => {
        dispatch(close());
        dispatch(reset());
        document.location.reload();
    };

    return (
        <DuplicateForm id={state.id} name={state.name} isInitialized={state.isInitialized} close={handleClose} link={state.link}/>
    );
};

export default Duplicate;