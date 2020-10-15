import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import ModalComponent from "../modal";
import Error from "../modal/error";
import {reducers} from "../../types";
import {CreateDuplicateVGO} from "../../middleware/assyncActions";
import AddPersonnelNumbers from "../addPersonnelNumbers/addPersonnelNumbers";
import {initialize} from "./addPersonnelNumbersSlice";
import {modalOpen} from "../modal/modalSlice";

const AddPersonnelNumbersButton = function () {
    const dispatch = useDispatch();

    const isError: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    const isInitialize: boolean = useSelector((state: reducers) => state.addPersonnelNumbersReducer.isInitialized);

    //open modal window
    const handleOpen = () => {
        dispatch(initialize());
        dispatch(modalOpen());
    };

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleOpen}>
                Добавить табельные номера
            </button>

            {isInitialize &&
            <ModalComponent>
                {isError &&
                <Error/>
                }
                {!isError &&
                <AddPersonnelNumbers/>
                }
            </ModalComponent>
            }

           <div className={"perenos"}/>
        </React.Fragment>
    )
};

export default AddPersonnelNumbersButton