import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { exercises, program } from '../../utils';
import { RestDayCard, Title, WorkoutCard } from '../../components';

export const Workouts = () => {
	const classes = useStyles();
	// const exercise = exercises.chest;

	const isTrainingDay = (workout: any) => {
		if (workout.exercises) {
			return (
				<WorkoutCard
					title={workout.title}
					day={workout.day}
					path={workout.path}
					exercises={workout.exercises}
					sets={workout.sets}
					reps={workout.reps}
				/>
			);
		} else if (workout.weekIndex) {
			return (
				<Typography variant="h6" className={classes.weekTitle}>
					{'vecka ' + workout.weekIndex}
				</Typography>
			);
		} else {
			return <RestDayCard day={workout.day} />;
		}
	};

	return (
		<>
			<Title title="Pass" />
			<Grid className={classes.container}>
				{program.map((workout) => isTrainingDay(workout))}
			</Grid>
		</>
	);
};
