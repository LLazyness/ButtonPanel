import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import ModalComponent from "../modal";
import Error from "../modal/error";
import {reducers} from "../../types";
import {CreateDuplicateVGO} from "../../middleware/assyncActions";
import Duplicate from "../duplicateVGO/duplicate";
import {useState} from "react";

const DuplicateVGOButton = function () {
    const dispatch = useDispatch();

    const isError: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    const isInitialize: boolean = useSelector((state: reducers) => state.duplicateVGOReducer.isInitialized);

    const [disabled, setDisabled] = useState(false);

    //open modal window
    const handleOpen = () => {
        setDisabled(!disabled);
        dispatch(CreateDuplicateVGO(sessionStorage.getItem('ID')));
    };

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleOpen} disabled={disabled}>
                Создать дубликат ВГО
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

export default DuplicateVGOButton