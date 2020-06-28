import * as React from "react";
import {makeStyles} from '@material-ui/core/styles/index';
import Modal from '@material-ui/core/Modal/index';
import {useDispatch, useSelector} from "react-redux";
import {close} from "../../middleware/assyncActions"
import {ReactChild, ReactFragment, ReactPortal} from "react";
import {reducers} from "../../types";
import {modalType} from "./modalSlice";

interface Props {
    children: JSX.Element[] | JSX.Element | ReactChild | ReactFragment | ReactPortal
}

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
        overflow: 'auto',
    },
}));

//base modal component, that render result of func variable
export default function ModalComponent(props: Props) {
    const dispatch = useDispatch();
    const classes = useStyles({});
    const [modalStyle] = React.useState(getModalStyle);
    const state: modalType = useSelector((state: reducers) => state.modalReducer);

    const handleClose = () => {
        dispatch(close());
    };

    return (
        <div>
            <Modal
                disableEnforceFocus
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={state.isOpen}
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    {props.children}
                </div>
            </Modal>
        </div>
    );
}
