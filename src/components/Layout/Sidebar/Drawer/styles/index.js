import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        boxShadow: '4px 0px 8px -8px rgba(0,0,0,0.75);!important',
        whiteSpace: 'nowrap',
        width: 280,
        height: '100vh',
        borderRight: 'none',
        transition: 'all .60s ease'
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        width: 60,
        transition: 'all .60s ease',
        [theme.breakpoints.up('sm')]: {
            width: 60,
        },
        '&:hover': {
            width: 280,
        },
        position: 'absolute'
    }
}));

export default useStyles;