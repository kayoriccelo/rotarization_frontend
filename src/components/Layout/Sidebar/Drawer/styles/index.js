import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 280,
        height: '100vh',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: 50,
        [theme.breakpoints.up('sm')]: {
            width: 55,
        },
        '&:hover': {
            width: 280,
            position: 'absolute'
        }
    },
    openSideBar: {
        marginBottom: 'auto',
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default useStyles;