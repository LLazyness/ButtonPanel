import * as React from "react";
import Button from "@material-ui/core/Button/index";
import {close} from "../../middleware/assyncActions";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid/index";
import DialogContent from "@material-ui/core/DialogContent/index";
import DialogTitle from "@material-ui/core/DialogTitle/index";
import DialogActions from "@material-ui/core/DialogActions/index";
import {reducers} from "../../types";

const Error = function () {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(close());
    };

    const error:string = useSelector((state:reducers) => state.apiReducer.error);

    return (
        <div>
            <DialogTitle id="alert-dialog-title">Ошибка</DialogTitle>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                <DialogContent>
                    <h2>{error}</h2>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>
                        Закрыть
                    </Button>
                </DialogActions>
            </Grid>
        </div>
    )
};

export default Error