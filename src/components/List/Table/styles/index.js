import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    rootTable: {
        overflow: 'auto',
        margin: 2
    },
    card: {
        height: 'calc(100vh - 280px)',
        minWidth:  'calc(100vh - 180px)',
        overflow: 'auto'
    },
    cardNotPagination: {
        height: 'calc(100vh - 280px)',
        minWidth: 'calc(100vh - 180px)',
        overflowX: 'auto',
        overflowY: 'visible'
    },
    tableCell: {
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: 'italic',
        color: 'black'
    }
});

export default useStyles;