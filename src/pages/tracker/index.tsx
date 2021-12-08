import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

export const Tracker = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.container}>
			<Typography variant="h4">Tracker</Typography>
		</Grid>
	);
};
