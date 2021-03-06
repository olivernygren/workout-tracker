import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { ExerciseTitle, ExerciseTrackingCard } from '../../components';
import { pathToExerciseName } from '../../utils';

export const ExerciseTracker = () => {
	const classes = useStyles();

	const path = window.location.pathname;
	const exerciseName = pathToExerciseName(path);
	console.log(exerciseName);

	return (
		<Grid className={classes.container}>
			<ExerciseTitle title={exerciseName} />
			<ExerciseTrackingCard sets={5} />
		</Grid>
	);
};
