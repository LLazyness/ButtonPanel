import React from "react";
import Button from "@material-ui/core/Button";
import {modalClose} from "../../actions/Review/SendForReview";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const Error = function () {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(modalClose())
    };

    const error = useSelector(state => state.reviewReducer.error);

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