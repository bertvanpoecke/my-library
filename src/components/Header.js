import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "30px",
	},
	paper: {
		backgroundColor: theme.palette.primary.dark,
	},
	intro: {
		border: "solid 2px",
		borderColor: theme.palette.primary.dark,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<Box>
			<Box marginTop={3}>
				<Paper className={classes.paper}>
					<img src="/static/images/BertBoeken_v3.png" className={classes.root} alt="Library site header" />
				</Paper>
			</Box>
			<Box marginTop={3}>
				<Card className={classes.intro}>
					<CardContent >
						<Typography paragraph>
							Vanuit mijn wetenschappelijke opleiding heb ik altijd al een zwak gehad voor natuurfenomenen, dagelijkse wiskundige toepassingen en een heleboel andere schijnbaar "nutteloze" wetenschapsweetjes.
							Hieronder vind je een lijst van boeken die onmiddelijk mijn aandacht trokken in de boekenwinkel.
							Stuk voor stuk leggen ze duidelijk en eenvoudig uit hoe bepaalde dingen werken, of waar wetenschappelijke concepten gebruikt worden in het dagelijkse leven.
							Zelfs zonder dat we er ons bewust van zijn.
						</Typography>
						<Typography paragraph>
							Heb je zelf suggesties om mijn lijstje uit te breiden? Dan hoor ik het graag.
						</Typography>
						<Typography>
							Veel leesplezier.
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
}
