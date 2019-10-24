import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../commons/styles';


export default makeStyles({
    background: {
        background: commonStyles.backgroundColor,
        height: '200px',
        width: '100%'
    },
    main: {
        padding: '15px 30px 0px 30px',
    },
    title: {
        color: commonStyles.primaryColor,
        fontSize: 18,
    },
    subTitle:{
        color: commonStyles.primaryColor,
        paddingBottom: 15,
        fontSize: 12, 
    },
    border: {
        borderRadius: 10,
        backgroundColor: 'white'
    },
    content: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        border: '1px solid #DDD',
        height: 'calc(100vh - 200px)'
    }
});
