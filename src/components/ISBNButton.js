import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Snackbar from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';

export default function ISBNButton(props) {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		navigator.clipboard.writeText(String(props.isbn))
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const snackbarMessage = "ISBN nummer gekopieerd naar plakbord: " + String(props.isbn)

	return (
		<div>
			<Tooltip interactive title="Copy ISBN nummer">
				<IconButton
					aria-label="isbn"
					onClick={handleClick}
				>
					<LibraryBooksIcon />
				</IconButton>
			</Tooltip>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={open}
				autoHideDuration={4000}
				onClose={handleClose}
				message={snackbarMessage}
				action={
					<React.Fragment>
						<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
							<CloseIcon fontSize="small" />
						</IconButton>
					</React.Fragment>
				}
			/>
		</div>
	);
}
