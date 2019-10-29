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
		height: `calc(75vh - 240px)`,
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


export default function ListLocalizations({ localizations, handleLocalizationChange }) {
	const classes = useStyles();
	const [checkeds, setCheckeds] = useState([]);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		api.get('api/v1/localization').then(res => {
			setOptions(res.data.results);
		});

		localizations && setCheckeds(localizations);
	}, [localizations, setCheckeds])

	const getItemInList = (item, listItems) => {
		let itemChecked = null;

		listItems.map(itemList => {
			itemChecked = itemList.id === item.id && itemList;
		});

		return itemChecked;
	};

	const handleToggle = valueItem => () => {
		const currentIndex = getItemInList(valueItem, checkeds)

		const newChecked = [...checkeds];

		if (!currentIndex) {
			newChecked.push(valueItem);
		} else {
			newChecked.splice(currentIndex, 1);
		};

		setCheckeds(newChecked);
		handleLocalizationChange(newChecked);
	};

	return (
		<List dense className={classes.root}>
			{options.map(option => {
				const labelId = `checkbox-list-secondary-label-${option.id}`;

				return (
					<ListItem key={option.id}>
						<ListItemText
							id={labelId}
							primary={<div style={{ fontSize: 11 }}>{option.code} - {option.description} / {option.address}</div>}
						/>
						<ListItemSecondaryAction>
							<Checkbox
								edge="end"
								onChange={handleToggle(option)}
								checked={getItemInList(option, checkeds) !== null}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};
