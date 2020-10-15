import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import React from "react";
import {useStyles} from "../../component/style";
import {DuplicateVGOType} from "./duplicateSlice";
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

interface DuplicateFormProps extends DuplicateVGOType {
    close: any,
}

const useLocalStyle = makeStyles( {
    root: {
        fontSize: '16px'
    }
});

const DuplicateForm = (props: DuplicateFormProps) => {
    console.log(props.name);
    const classes = useStyles();
    const localClass = useLocalStyle();
    return (
        <React.Fragment>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center" className={classes.duplicateContainer}>
                    {props.name.length > 0 &&
                    <Typography className={classes.modalHeader} classes = {{root: localClass.root}}>
                        <h1>Созданный дубликат</h1>
                        <a href={props.link}>{props.name}</a>
                    </Typography>
                    }
                    <CloseButton close={props.close}/>
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

export default DuplicateForm