import * as React from "react";
import {useDispatch} from "react-redux";
import {close, RemoveKDInventory} from "../../middleware/assyncActions";
import {Form} from "./removeForm";

export const RemoveHandler = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(close());
    };

    const handleSubmit = () => {
        dispatch(RemoveKDInventory());
    };

    return (
        <Form close={handleClose} submit={handleSubmit}/>
    );
};