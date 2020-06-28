import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
    modalHeader: {
        textAlign: "center",
        margin: '50px',
    },
    nodeName: {
        fontSize: "16px",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
    selectField: {
        width: 400,
        height: 50,
    },
    checkBox: {
        height: '30px',
    },
    buttonGrid: {
        justifyContent: 'center',
        marginTop: '20px',
    },
    reasonContainer: {
        width: '1000px',
    },
    attachContainer: {
        marginTop: '30px'
    },
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    modalContainer: {
        width: '1000px',
    },
    duplicateContainer: {
        width: '1000px',
        marginTop: '20px',
    }

}));