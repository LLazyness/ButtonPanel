import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import React from "react";
import {useStyles} from "../../component/style";
import {Typography} from "@material-ui/core";

interface FormProps {
    close: any,
    submit: any
}

export const Form = (props: FormProps) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center" className={classes.personnelNumbersContainer}>

            <Typography variant="h6">
                Удалить все связанные описи?
            </Typography>

            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4} />
                <Grid item xs={2} className={classes.buttonGrid}>
                    <Button variant="outlined" onClick={props.submit}>
                        Ок
                    </Button>
                </Grid>
                <Grid item xs={2} className={classes.buttonGrid}>
                    <Button variant="outlined" onClick={props.close}>
                        Отмена
                    </Button>
                </Grid>
                <Grid item xs={4} />
            </Grid>
            </Grid>
        </React.Fragment>
    )
};

