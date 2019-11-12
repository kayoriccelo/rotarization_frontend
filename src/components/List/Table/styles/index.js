import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    rootTable: {
        overflow: 'auto',
        margin: 2
    },
    card: {
        height: window.innerWidth <= 780 ? `calc(60vh - 100px)` : `calc(100vh - 280px)`,
        minWidth:  window.innerWidth <= 780 ? 100 : 450,
        overflow: 'auto'
    },
    cardNotPagination: {
        height: window.innerWidth <= 780 ? `calc(60vh - 220px)` : `calc(100vh - 280px)`,
        minWidth: window.innerWidth <= 780 ? 100 : 450,
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