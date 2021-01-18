import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

export default function SimpleBackdrop(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Tooltip interactive title="ISBN nummer">
				<IconButton
					aria-label="isbn"
					onClick={handleToggle}
				>
					<LibraryBooksIcon />
				</IconButton>
			</Tooltip>
			<Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
				<Typography>
					{props.isbn}
				</Typography>
			</Backdrop>
		</div>
	);
}


