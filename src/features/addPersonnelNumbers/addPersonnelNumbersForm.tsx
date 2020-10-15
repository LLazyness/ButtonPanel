import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import React from "react";
import {useStyles} from "../../component/style";
import {PersonnelNumbersType} from "./addPersonnelNumbersSlice";
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

interface FormProps extends PersonnelNumbersType {
    close: any,
    set: any,
    submit: any
}

const useLocalStyle = makeStyles( {
    root: {
        fontSize: '16px'
    }
});

const AddPersonnelNumbersForm = (props: FormProps) => {
    const classes = useStyles();
    const localClass = useLocalStyle();
    return (
        <React.Fragment>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center" className={classes.personnelNumbersContainer}>

                    <Typography className={classes.modalHeader} classes = {{root: localClass.root}}>
                        <h1>Укажите табельные номера</h1>
                        <TextField
                            id="outlined-multiline-static"
                            label="Табельные номера"
                            multiline
                            rows="8"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={props.personnelNumbers}
                            onChange={props.set()}
                        />
                    </Typography>

            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4} />
                <Grid item xs={2} className={classes.buttonGrid}>
                    <Button variant="outlined" onClick={props.submit}>
                        Ок
                    </Button>
                </Grid>
                <Grid item xs={3} className={classes.buttonGrid}>
                    <Button variant="outlined" onClick={props.close}>
                        Отмена
                    </Button>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            </Grid>
        </React.Fragment>
    )
};

const CloseButton = (props: any) => {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Button variant="outlined" onClick={props.close}
                    className={classes.buttonGrid}>
                Закрыть
            </Button>
        </Grid>
    )
};

export default AddPersonnelNumbersForm