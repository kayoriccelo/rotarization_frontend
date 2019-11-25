import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        overflow: 'auto',
    },
    cardContent: {
        overflowX: 'auto',
        height: 'calc(100vh - 260px)',
        padding: '10px 10px 10px 10px'
    },
    actions: {
        height: 40,
        background: 'linear-gradient(to right, #ffffff 0%, #e6e6e6 100%)',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5
    },
    button: {
        margin: 2,
    },
});

export default useStyles;