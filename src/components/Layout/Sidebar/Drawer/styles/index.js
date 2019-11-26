import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        boxShadow: '4px 0px 10px -8px rgba(0,0,0,0.75);!important',
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
        width: 60,
        [theme.breakpoints.up('sm')]: {
            width: 60,
        },
        '&:hover': {
            width: 280,
            position: 'absolute'
        }
    }
}));

export default useStyles;