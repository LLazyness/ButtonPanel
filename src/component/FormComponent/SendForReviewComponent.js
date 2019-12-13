import React from 'react';
import Checkbox from "@material-ui/core/Checkbox/index";
import Grid from "@material-ui/core/Grid/index";
import Select from "@material-ui/core/Select/index";
import MenuItem from "@material-ui/core/MenuItem/index";
import TextField from "@material-ui/core/TextField/index";
import Button from "@material-ui/core/Button/index";
import FormHelperText from "@material-ui/core/FormHelperText/index";
import {useStyles} from "../../component/style";

const SendForReviewForm = (props) => {
    const classes = useStyles();

    if (props.isInitialize) {
        return (
            <React.Fragment>
                <Grid container spacing={3} direction="column" justify="center" alignItems="center"
                      className={classes.reasonContainer}>
                    <h1 className={classes.modalHeader}>Выберите документы, которые необходимо вернуть на доработку</h1>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={1} spacing={3}>
                            <Checkbox color={"default"} className={classes.checkBox} checked={props.isSelectAll}
                                      onChange={props.selectAllChange}
                            />
                        </Grid>
                        <Grid item xs={4} className={classes.nodeName}>Вернуть весь пакет документов</Grid>
                        <Grid item xs={7} spacing={3}></Grid>
                    </Grid>

                    {props.elements.map((element, index) =>

                        <Grid container direction="row" justify="center" alignItems="center"
                              className={classes.attachContainer}>
                            <Grid item xs={1} spacing={3}>
                                <Checkbox color={"default"} className={classes.checkBox} checked={element.flag} onChange={props.handleChange(index)} />
                            </Grid>

                            <Grid item xs={11} spacing={3}>
                                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <p className={classes.nodeName}>{element.name}</p>
                                    </Grid>
                                </Grid>

                                {element.flag && !props.isSelectAll &&
                                <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                                    <Grid item xs={6}>

                                        <Select error={element.isError} className={classes.selectField}
                                                labelId="label" id="select"
                                                value={element.reason} onChange={props.changeReason(index)}
                                                displayEmpty>
                                            <MenuItem value="" disabled>Выберите причину возврата</MenuItem>
                                            {props.reasons.map((element) =>
                                                <MenuItem value={element}>{element}</MenuItem>)
                                            }
                                        </Select>
                                        {element.isError &&
                                        <FormHelperText error={element.isError} disabled={element.isError}>
                                            Это поле обязательное для заполнения!
                                        </FormHelperText>
                                        }

                                    </Grid>
                                    <Grid item xs={6} spacing={3}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Комментарий"
                                            multiline
                                            rows="3"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            value={element.comment}
                                            onChange={props.updateCommentValue(index)}
                                        />
                                    </Grid>
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                    )
                    }

                    {props.isSelectAll &&
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={6}>
                            <Select error={props.isRequired} className={classes.selectField} labelId="label" id="select" value={props.globalReason} onChange={props.changeGlobalReason()} displayEmpty>
                                <MenuItem value="" disabled>Выберите причину возврата</MenuItem>
                                {props.reasons.map((element) =>
                                    <MenuItem value={element}>{element}</MenuItem>)
                                }
                            </Select>
                            {props.isRequired &&
                            <FormHelperText error={props.isRequired} disabled={props.isRequired}>
                                Это поле обязательное для заполнения!
                            </FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={6} spacing={3}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Комментарий"
                                multiline
                                rows="3"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={props.globalComment}
                                onChange={props.changeGlobalComment()}
                            />
                        </Grid>
                    </Grid>
                    }
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3} className={classes.buttonGrid}>
                            <Button variant="outlined" onClick={props.handleSubmit} color="secondary">
                                Отправить на доработку
                            </Button>
                        </Grid>
                        <Grid item xs={3} className={classes.buttonGrid}>
                            <Button variant="outlined" onClick={props.handleClose}>
                                Отмена
                            </Button>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    } else return (<React.Fragment></React.Fragment>)
};

export default SendForReviewForm