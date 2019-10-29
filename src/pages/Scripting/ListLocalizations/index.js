import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import api from '../../../services/api';


const useStyles = makeStyles(theme => ({
	root: {
		width: '90%',
		boxSizing: `border-box`,
		border: `1px solid transparent`,
		height: `calc(80vh - 220px)`,
		marginTop: 10,
		padding: `0 12px`,
		borderRadius: `3px`,
		boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
		fontSize: `14px`,
		outline: `none`,
		textOverflow: `ellipses`,
		overflow: 'auto',
	},
}));


export default function ListLocalizations() {
	const classes = useStyles();
	const [checked, setChecked] = useState([]);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		api.get('api/v1/localization').then(res => {
			setOptions(res.data.results);
		});
	})

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List dense className={classes.root}>
			{options.map(value => {
				const labelId = `checkbox-list-secondary-label-${value}`;

				return (
					<ListItem key={value}>
						<ListItemText
							id={labelId}
							primary={`${value.code} - ${value.description} / ${value.address}`}
						/>
						<ListItemSecondaryAction>
							<Checkbox
								edge="end"
								onChange={handleToggle(value)}
								checked={checked.indexOf(value) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};
