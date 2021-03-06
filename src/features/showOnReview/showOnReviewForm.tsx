import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import React from "react";
import {useStyles} from "../../component/style";
import Paper from "@material-ui/core/Paper/index";
import Table from "@material-ui/core/Table/index";
import TableRow from "@material-ui/core/TableRow/index";
import TableCell from "@material-ui/core/TableCell/index";
import TableHead from "@material-ui/core/TableHead/index";
import TableBody from "@material-ui/core/TableBody/index";
import {showOnReviewType} from "./showOnReviewSlice";

interface ShowOnReviewFormProps extends showOnReviewType {
    open: any,
    close: any,
}

const ShowOnReviewForm = (props: ShowOnReviewFormProps) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center"
                  className={classes.reasonContainer}>
                <h1>Документы на доработке</h1>

                <Paper className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell align="center">Название документа</TableCell>
                                <TableCell align="center">Причина возврата</TableCell>
                                <TableCell align="center">Возврат выполнил</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {props.returned.map((element, index) =>
                                <TableRow key={index + 1}>
                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                    <TableCell align="center">{element.name}</TableCell>
                                    <TableCell align="center">{element.returnReason}</TableCell>
                                    <TableCell align="center">{element.returnPerson}</TableCell>
                                </TableRow>
                            )
                            }
                        </TableBody>
                    </Table>
                </Paper>
                <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                        <Button variant="outlined" onClick={props.open}
                                className={classes.buttonGrid}>
                            Распечатать корректировочный лист
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={props.close}
                                className={classes.buttonGrid}>
                            Закрыть
                        </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                 </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default ShowOnReviewForm