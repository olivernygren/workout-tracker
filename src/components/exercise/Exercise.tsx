import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { AssessmentRounded } from '@material-ui/icons';

interface IExercise {
	name: string;
	sets: number;
	repsMin: number;
	repsMax: number;
	tracked?: boolean;
	path: string;
}

export const Exercise = ({
	name,
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
			<Typography variant="subtitle2" className={classes.exerciseName}>
				{name}
			</Typography>
			<Grid item className={classes.info}>
				<Typography variant="body1">{setsXreps}</Typography>
				{tracked && (
					<Link to={path}>
						<AssessmentRounded
							fontSize="large"
							color="secondary"
							className={classes.icon}
						/>
					</Link>
				)}
			</Grid>
		</Grid>
	);
};
