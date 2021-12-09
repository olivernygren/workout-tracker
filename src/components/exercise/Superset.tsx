import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { Exercise } from '../../types';

interface ISuperset {
	firstExercise: Exercise;
	secondExercise: Exercise;
}

export const Superset = ({ firstExercise, secondExercise }: ISuperset) => {
	const classes = useStyles();
	const firstExerciseRepRange =
		firstExercise.repsMin + '-' + firstExercise.repsMax;
	const secondExerciseRepRange =
		secondExercise.repsMin + '-' + secondExercise.repsMax;
	const firstExerciseSetsXreps =
		firstExercise.sets + ' X ' + firstExerciseRepRange;
	const secondExerciseSetsXreps =
		secondExercise.sets + ' X ' + secondExerciseRepRange;

	return (
		<Grid container className={classes.card}>
			<Grid item container className={classes.supersetExercise}>
				<Typography variant="subtitle2" className={classes.exerciseName}>
					{firstExercise.name}
				</Typography>
				<Grid item className={classes.info}>
					<Typography variant="body1">{firstExerciseSetsXreps}</Typography>
				</Grid>
			</Grid>
			<Grid item container className={classes.supersetExercise}>
				<Typography variant="subtitle2" className={classes.exerciseName}>
					{secondExercise.name}
				</Typography>
				<Grid item className={classes.info}>
					<Typography variant="body1">{secondExerciseSetsXreps}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
