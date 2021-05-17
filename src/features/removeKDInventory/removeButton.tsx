import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import ModalComponent from "../modal";
import Error from "../modal/error";
import {reducers} from "../../types";
import {modalOpen} from "../modal/modalSlice";
import {useState} from "react";
import {RemoveHandler} from "./removeHandler";
import {ResultForm} from "./resultForm";
import {close} from "../../middleware/assyncActions";

export const RemoveKDInventoryButton = function () {
    const dispatch = useDispatch();

    const isError: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    const [isInitialize, setInitialize] = useState(false);
    const text = useSelector((state: reducers) => state.removeKDInventoryReducer.text);
    const isFetched = useSelector((state: reducers) => state.removeKDInventoryReducer.isFetched);

    // open modal window
    const handleOpen = () => {
        setInitialize(true);
        dispatch(modalOpen());
    };

    const handleClose = () => {
        dispatch(close());
        // @ts-ignore
        window.open(sessionStorage.getItem("URL") + "?func=nnsodwebui.workplace#/filter/23/","_self")
    };

    return (
        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleOpen}>
                Удалить все связанные описи
            </button>

            {isInitialize &&
            <ModalComponent>
                {isError &&
                <Error/>
                }
                {isFetched &&
                <ResultForm text={text} submit={handleClose}/>
                }
                {!isError && !isFetched &&
                <RemoveHandler/>
                }
            </ModalComponent>
            }

           <div className={"perenos"}/>
        </React.Fragment>
    )
};