import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../../commons/styles';


export default makeStyles({
    button: {
        marginTop: 20,
        width: '80%',
        color: commonStyles.primaryColor,
        backgroundColor: commonStyles.buttonPrimary,
        '&:hover': {
            backgroundColor: commonStyles.buttonPrimaryHover,
        },
    }
});
