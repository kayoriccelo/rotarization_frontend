import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
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
        flex: 5,
        height: 'calc(78vh - 180px)'
    },
    list: {
        flex: 2, 
        padding: 8
    },
    rootListLocalization: {
		width: '100%',
		boxSizing: `border-box`,
		border: `1px solid transparent`,
		height: `100%`,
		borderRadius: `3px`,
		fontSize: `14px`,
		outline: `none`,
		textOverflow: `ellipses`,
		overflow: 'auto',
	},
});
