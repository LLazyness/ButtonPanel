import * as React from "react";
import Error from "../modal/error";
import ModalComponent from "../modal";
import {useDispatch, useSelector} from "react-redux";
import {reducers} from "../../types";
import {SendTaxHandler} from "../../middleware/assyncActions";

const SendTax = function () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(SendTaxHandler());
    };

    const isError: boolean = useSelector((state: reducers) => state.apiReducer.isError);
    console.log(isError);
    return (

        <React.Fragment>
            <button className="nnsod-actions-neutral" type="button" onClick={handleClick}>
                Отправить
            </button>
            <div className={"perenos"}/>

            {isError && // modal opens in asyncActions
                <ModalComponent>
                    <Error/>
                </ModalComponent>
            }
        </React.Fragment>


    )
};

export default SendTax;