import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {useDispatch, useSelector} from "react-redux";
import {close} from "../../actions/modal/index"
import {resetState} from "../../actions/Review/SendForReview"

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        minWidth: '30%',
        maxWidth: '100%',
        minHeight: '10%',
        maxHeight: '90%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow:'auto',
    },
}));

//base modal component, that render result of func variable
export default function ModalComponent() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen);
    const func = useSelector(state => state.modal.func);

    const handleClose = () => {
        dispatch(close());
        dispatch(resetState());
    };

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {func}
                </div>
            </Modal>
        </div>
    );
}
