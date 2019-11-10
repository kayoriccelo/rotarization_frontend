import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%'
    },
    main: openDrawer => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: openDrawer ? 'calc(100% - 241px)' : 'calc(100% - 51px)',
        marginLeft: openDrawer ? 0 : 51,
        position: openDrawer ? 'relative' : 'absolute',
    })
});
