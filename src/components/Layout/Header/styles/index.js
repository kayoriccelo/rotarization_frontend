import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../../commons/styles';

export default makeStyles({
    root: {
        height: 60,
        width: '100%',
        background: commonStyles.backgroundColor,
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
        color: 'white',
        '&:hover': {
            backgroundColor: '#384047',
            cursor: 'pointer'
        },
    },
    avatar: {
        height: 30,
        width: 30,
        margin: 10,
        backgroundColor: 'white'
    }
});
