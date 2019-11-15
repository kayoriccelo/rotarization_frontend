import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    container: {
        marginTop: 10
    },
    content: {
        display: 'flex',
    },
    searchOrigin: {
        flex: 1,
        padding: '0px 8px 8px 0px',
        alignItems: 'flex-end'
    },
    searchDestiny: {
        flex: 1,
        padding: '0px 0px 8px 8px',
        alignItems: 'flex-start'
    },
    map: {
        flex: 4,
        height: 'calc(80vh - 250px)',
        marginTop: '8px'
    },
    listLocalization: {
        flex: 1,
        height: 'calc(80vh - 250px)',
        margin: '8px 0px 0px 8px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '4px'
    },
    listEmployee: {
        flex: 2,
        padding: 8
    },
    rootSubList: {
        width: '100%',
        boxSizing: `border-box`,
        border: `1px solid transparent`,
        borderRadius: `3px`,
        fontSize: `14px`,
        outline: `none`,
        textOverflow: `ellipses`,
        overflow: 'auto',
    },
});
