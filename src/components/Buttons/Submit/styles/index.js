import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../../commons/styles';


export default makeStyles(theme => ({
    grid: {
        width: '88%',
        margin: '0px 4px'
    },
    button: {
        marginTop: 20,
        width: '100%',
        color: commonStyles.primaryColor,
        backgroundColor: commonStyles.buttonPrimary,
        '&:hover': {
            backgroundColor: commonStyles.buttonPrimaryHover,
        },
    }
}));
