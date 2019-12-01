import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    root: {
        height: 60,
        width: '100%',
        background: '#f5f5f5',
        display: 'flex'
    },
    toolBar: {
        flex: 1,
        display: 'flex'
    },
    openSide: {
        padding: 15,
        '&:hover': {
            backgroundColor: '#8dbcd8', 
            cursor: 'pointer',
            color: 'white'
        },
        color: '#808080'
    }
});
