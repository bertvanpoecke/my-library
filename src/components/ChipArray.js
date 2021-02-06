import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { DNALabel, MathLabel, HistoryLabel } from './Labels'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		listStyle: 'none',
		padding: theme.spacing(0.5),
	},
	chip: {
		margin: theme.spacing(0.5),
	},
}));

export default function ChipsArray(props) {
	const classes = useStyles();
	const [selectedKey, setSelectedKey] = React.useState(0)

	const handleClick = (clickedChip) => () => {
		setSelectedKey(clickedChip.key);
		props.handleChange(clickedChip.internalLabel)
	};

	const scienceSelector = (data) => {
		return <DNALabel
			className={classes.chip}
			color="primary"
			onClick={handleClick(data)}
			variant={(data.key === selectedKey) ? "default" : "outlined"}
		/>
	}
	const mathSelector = (data) => {
		return <MathLabel
			className={classes.chip}
			color="primary"
			onClick={handleClick(data)}
			variant={(data.key === selectedKey) ? "default" : "outlined"}
		/>
	}
	const historySelector = (data) => {
		return <HistoryLabel
			className={classes.chip}
			color="primary"
			onClick={handleClick(data)}
			variant={(data.key === selectedKey) ? "default" : "outlined"}
		/>
	}
	const defaultSelector = (data) => {
		return <Chip
			label={data.label}
			className={classes.chip}
			color="primary"
			onClick={handleClick(data)}
			variant={(data.key === selectedKey) ? "default" : "outlined"}
		/>
	}

	const chipData = [
		{ key: 0, label: 'Alles', chip: defaultSelector, internalLabel: 'all' },
		{ key: 1, label: 'Wetenschap', chip: scienceSelector, internalLabel: 'science' },
		{ key: 2, label: 'Wiskunde', chip: mathSelector, internalLabel: 'mathematics' },
		{ key: 3, label: 'Geschiedenis', chip: historySelector, internalLabel: 'history' },
		{ key: 4, label: 'Andere', chip: defaultSelector, internalLabel: 'other' },
	];

	return (
		<Paper marginTop={3} component="ul" className={classes.root} >
			{
				chipData.map((data) => {
					return <li key={data.key}>{data.chip(data)}</li>
				})
			}
		</Paper >
	);
}
