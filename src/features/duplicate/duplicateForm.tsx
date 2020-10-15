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
import {duplicate, duplicateType} from "./duplicateSlice";
import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

interface DuplicateFormProps extends duplicateType {
    close: any,
}

const useLocalStyle = makeStyles(theme => ({
    root: {
        fontSize: '16px',
    }
}));

const DuplicateForm = (props: DuplicateFormProps) => {
    return (
        <React.Fragment>
            {props.duplicates.length > 0 &&
            <Duplicates duplicates={props.duplicates} authorDuplicate={props.duplicateAuthor}/>
            }
            <CloseButton close={props.close}/>
        </React.Fragment>
    )
};

interface duplicateProps {
    duplicates: duplicate[];
    authorDuplicate: string;
}

const Duplicates = (props: duplicateProps) => {
    const classes = useStyles();
    const localClasses = useLocalStyle();
    return (
        <React.Fragment>
            {props.authorDuplicate.length > 0 &&
                <Typography>
                        Создатель текущего дубликата: {props.authorDuplicate}
                </Typography>
            }
            <Grid container spacing={3} direction="column" justify="center" alignItems="center"
                  className={classes.duplicateContainer}>

                    <Paper className={classes.root}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow className={classes.tableCell}>
                                    <TableCell className={localClasses.root} classes = {{root: localClasses.root}}>№</TableCell>
                                    <TableCell className={localClasses.root} align="center">Тип документа</TableCell>
                                    <TableCell className={localClasses.root} align="center">Дата создания</TableCell>
                                    <TableCell className={localClasses.root} align="center">Название</TableCell>
                                    <TableCell className={localClasses.root} align="center">ФИО создателя дубликата</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {props.duplicates.map((element, index) =>
                                    <TableRow key={index + 1} >
                                        <TableCell className={localClasses.root} component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell className={localClasses.root} align="center">{element.type}</TableCell>
                                        <TableCell className={localClasses.root} align="center">{element.date}</TableCell>
                                        <TableCell className={localClasses.root} align="center"><a href={element.link}>{element.name}</a></TableCell>
                                        <TableCell className={localClasses.root} align="center">{element.user}</TableCell>
                                    </TableRow>
                                )
                                }
                            </TableBody>
                        </Table>
                    </Paper>
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