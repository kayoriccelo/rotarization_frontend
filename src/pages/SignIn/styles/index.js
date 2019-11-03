import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    form: {
        flex: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '1px solid #ddd'
    },
    formContent: {
        width: '80%',
    }
});
