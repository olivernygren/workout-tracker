import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { exercises } from '../../utils';

export const Workouts = () => {
	const classes = useStyles();
	const exercise = exercises.chest;

	return (
		<>
			<Grid className={classes.container}>
				<Typography variant="h4">Pass</Typography>
				<Typography variant="body1">
					{exercise.INCLINE_DUMBBELL_PRESS.name}
				</Typography>
				<Typography variant="body1">
					{exercise.FLAT_MACHINE_PRESS.name}
				</Typography>
				<Typography variant="body1">
					{exercise.SEATED_CABLE_FLY.name}
				</Typography>
			</Grid>
			<Grid container></Grid>
		</>
	);
};
