import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { AssessmentRounded, DateRangeRounded } from '@material-ui/icons';

interface IExercise {
	firstExerciseName: string;
	secondExerciseName: string;
	sets: number;
	repsMin: number;
	repsMax: number;
	tracked?: boolean;
	path: string;
}

export const Superset = ({
	firstExerciseName,
	secondExerciseName,
	sets,
	repsMin,
	repsMax,
	tracked,
	path,
}: IExercise) => {
	const classes = useStyles();
	const repRange = repsMin + '-' + repsMax;
	const setsXreps = sets + ' X ' + repRange;

	return (
		<Grid container className={classes.card}>
			<Grid item container>
				<Typography variant="subtitle2" className={classes.exerciseName}>
					{firstExerciseName}
				</Typography>
				<Grid item className={classes.info}>
					<Typography variant="body1">{setsXreps}</Typography>
				</Grid>
			</Grid>
			<Grid item container>
				<Typography variant="subtitle2" className={classes.exerciseName}>
					{secondExerciseName}
				</Typography>
				<Grid item className={classes.info}>
					<Typography variant="body1">{setsXreps}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
