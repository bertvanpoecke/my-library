import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
	return (
		<Typography paragraph="true" variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://bert.vanpoecke.org/">
				Bert Van Poecke
			</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	);
}
