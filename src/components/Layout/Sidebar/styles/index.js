import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    menu: {
        paddingLeft: 15,
        height: 35
    },
    subMenu: {
        paddingLeft: 20,
        height: 35
    },
    contentLogo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    labelLogo: {
        display: 'block', 
        fontSize: '100%', 
        fontWeight: 'bold',
        marginTop: 10
    },
    contentLogoClose: {
        display: 'flex',
        alignItems: 'center',
        height: 80,
    },
    labelLogoClose: {
        paddingLeft: 20,
        display: 'block', 
        fontSize: '100%', 
        fontWeight: 'bold',
        marginTop: 10
    }
});
