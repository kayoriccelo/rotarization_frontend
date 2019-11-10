import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../commons/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        backgroundColor: commonStyles.primaryColor,
        '&:hover': {
            width: 'calc(100% - 51px)',
        }
    }
});

export default useStyles;
