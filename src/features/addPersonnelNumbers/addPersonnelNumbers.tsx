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
        let ok = true;
        let errorNumbers = "";
        let array = state.personnelNumbers.split("\n");
        array.map((value) => {
            if(isNaN(Number(value))){
                errorNumbers += value + " ";
                ok = false;
            }
        });

        if (ok)
            dispatch(SubmitPersonnelNumbers(state.personnelNumbers));
        else {

            alert("В списке содержится некорректный табельный номер " + errorNumbers.slice(0, -1) + ". Табельный номер должен состоять только из цифр.");
        }
    };

    const set = () => (event:any) => {
        dispatch(setPersonnelNumbers(event.target.value))
    };

    return (
        <AddPersonnelNumbersForm isInitialized={state.isInitialized} close={handleClose} personnelNumbers={state.personnelNumbers} set={set} submit={handleSubmit}/>
    );
};

export default AddPersonnelNumbers;