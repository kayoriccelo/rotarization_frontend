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
        height: 40,
        width: 40,
        margin: '5px 10px 5px 0px',
        backgroundColor: '#8c8c8c'
    }
});
