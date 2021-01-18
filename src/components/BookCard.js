import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ISBNButton from './ISBNButton';
import LanguageIcon from '@material-ui/icons/Language';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { DNALabel, MathLabel, WorldLabel } from './Labels'
import { Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '150%',
	},
	boxcontainer: {
		display: "flex",
		position: "relative",
	},
	img: {
		width: "15em",
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: theme.palette.info.main,
		width: '4em',
		height: '4em',
	},
	headerIcon: {
		width: '50%',
		height: 'auto',
	},
	chips: {
		position: "absolute",
		bottom: 0,
	}
}));

const scienceCategory = "science"
const mathematicsCategory = "mathematics"
const geographyCategory = "geography"

export default function BookCard(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const showWebsite = () => {
		window.open(props.details.website, "_blank");
	};

	const getCategoryLabel = (category) => {
		switch (category) {
			case scienceCategory:
				return <DNALabel color="secondary" />;
			case mathematicsCategory:
				return <MathLabel color="secondary" />;
			case geographyCategory:
				return <WorldLabel color="secondary" />;
			default:
				return null
		}
	}

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
						<MenuBookIcon className={classes.headerIcon} />
					</Avatar>
				}
				title={props.details.title}
				titleTypographyProps={{ variant: 'h4' }}
				subheader={props.details.author.name}
			/>
			<Box className={classes.boxcontainer}>
				<CardMedia
					title={props.details.media.title}
				>
					<img src={props.details.media.src} className={classes.img} alt="Cover preview" />
				</CardMedia>
				<Box className={classes.boxcontainer2}>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{props.details.content.summary}
						</Typography>
					</CardContent>
					<CardContent className={classes.chips}>
						{getCategoryLabel(props.details.category)}
					</CardContent>
				</Box>
			</Box>
			<CardActions disableSpacing>
				<Box display={props.details.website ? "" : "none"}>
					<Tooltip title="Website">
						<IconButton
							onClick={showWebsite}
							aria-label="website"
						>
							<LanguageIcon />
						</IconButton>
					</Tooltip>
				</Box>
				<ISBNButton isbn={props.details.isbn}></ISBNButton>
				<Tooltip title="Meer info">
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</IconButton>
				</Tooltip>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					{props.details.content.backcover.map((par) => { return <Typography paragraph="true">{par}</Typography> })}
				</CardContent>
			</Collapse>
		</Card >
	);
}
