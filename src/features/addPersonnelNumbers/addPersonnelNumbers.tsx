import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {close, SubmitPersonnelNumbers} from "../../middleware/assyncActions";
import {reset, setPersonnelNumbers} from "./addPersonnelNumbersSlice";
import {reducers} from "../../types";
import AddPersonnelNumbersForm from "./addPersonnelNumbersForm";

const AddPersonnelNumbers = function () {
    const dispatch = useDispatch();

    const state = useSelector((state: reducers) => state.addPersonnelNumbersReducer);

    const handleClose = () => {
        dispatch(close());
        dispatch(reset());
        document.location.reload();
    };

    const handleSubmit = () => {
        dispatch(SubmitPersonnelNumbers(state.personnelNumbers))
    };

    const set = () => (event:any) => {
        dispatch(setPersonnelNumbers(event.target.value))
    };

    return (
        <AddPersonnelNumbersForm isInitialized={state.isInitialized} close={handleClose} personnelNumbers={state.personnelNumbers} set={set} submit={handleSubmit}/>
    );
};

export default AddPersonnelNumbers;