import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { exercises, program, workouts } from '../../utils';
import {
	RestDayCard,
	Title,
	WorkoutCard,
	NavigateBack,
} from '../../components';

export const Workouts = () => {
	const classes = useStyles();

	const getWorkout = (path: string) => {
		workouts.forEach((day) => {
			if (day.path === path) {
				console.log('matched ' + day.path + ' with ' + path);
				console.log(window.location.pathname);
			}
		});
	};

	const getTypeOfDay = (day: any) => {
		getWorkout(day.path);
		if (day.exercises) {
			return (
				<WorkoutCard
					title={day.title}
					day={day.day}
					path={day.path}
					exercises={day.exercises}
					sets={day.sets}
					reps={day.reps}
				/>
			);
		} else if (day.weekIndex) {
			return (
				<Typography variant="h6" className={classes.weekTitle}>
					{'vecka ' + day.weekIndex}
				</Typography>
			);
		} else {
			return <RestDayCard day={day.day} />;
		}
	};

	return (
		<>
			<Title title="Pass" />
			<Grid className={classes.container}>
				{program.map((day) => getTypeOfDay(day))}
			</Grid>
		</>
	);
};
