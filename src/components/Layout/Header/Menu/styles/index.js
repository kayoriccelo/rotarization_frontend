import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
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
