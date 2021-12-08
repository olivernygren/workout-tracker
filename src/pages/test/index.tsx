import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

export const Test = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.container}>
			<Typography variant="h1" className={classes.text}>
				Hej från test
			</Typography>
			<Typography variant="h2">Hej från test</Typography>
			<Typography variant="h3">Hej från test</Typography>
			<Typography variant="h4">Hej från test</Typography>
			<Typography variant="h5">Hej från test</Typography>
			<Typography variant="h6">Hej från test</Typography>
			<Typography variant="subtitle1">Hej från test</Typography>
			<Typography variant="subtitle2">Hej från test</Typography>
			<Typography variant="body1">Hej från test</Typography>
			<Typography variant="body2">Hej från test</Typography>
		</Grid>
	);
};
