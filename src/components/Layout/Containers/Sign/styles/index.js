import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../../../commons/styles';


export default makeStyles({
    container: {
        height: '100%',
        width: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: commonStyles.primaryColor,
        alignItems:"center",
        justify:"center"
    }
});
