import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../../commons/styles';

export default makeStyles({
    banner: {
        flex: 5,
        height: '100%',
        color: 'white',
        background: commonStyles.backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
