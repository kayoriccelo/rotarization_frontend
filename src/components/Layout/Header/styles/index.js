import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
        height: 60,
        width: '100%',
        background: '#f5f5f5',
        display: 'flex'
    },
    toolBar: {
        flex: 1
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 20px 0px 20px',
        color: '#8c8c8c',
        '&:hover': {
            backgroundColor: '#d9d9d9',
            cursor: 'pointer'
        },
    },
    avatar: {
        height: 30,
        width: 30,
        margin: 10,
        backgroundColor: '#8c8c8c'
    }
});
