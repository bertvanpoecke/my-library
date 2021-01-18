import React from 'react';
import BookCard from './BookCard';
import Box from '@material-ui/core/Box';
import ChipsArray from './ChipArray';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import books from '../data/books.json';

const useStyles = makeStyles((theme) => ({
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		backgroundColor: theme.palette.secondary.light,
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
		color: theme.palette.secondary.contrastText,
	},
}));

const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
};

export default function Main() {
	const classes = useStyles()
	const [category, setCategory] = React.useState("all");

	const handleChange = (label) => {
		setCategory(label);
	};

	return (
		<Box>
			<ChipsArray handleChange={handleChange} />
			{
				books.filter((book) => category === "all" || book.category === category).map(
					(book) => {
						return (
							<Box my={4}>
								<BookCard details={book} />
							</Box>
						)
					}
				)
			}
			<Tooltip title="Naar boven">
				<Fab onClick={scrollToTop} className={classes.fab}>
					<KeyboardArrowUpIcon />
				</Fab>
			</Tooltip>
		</Box>
	)
}