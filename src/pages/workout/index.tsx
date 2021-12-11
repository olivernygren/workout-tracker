import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { Exercise, Superset, Title, GoBackTitle } from '../../components';
import { program } from '../../utils';

export const Workout = () => {
	const classes = useStyles();
	const path = window.location.pathname;
	const workout = program.find((workout) => path === workout?.path);

	try {
		return (
			<Grid className={classes.container}>
				<GoBackTitle title={workout!.title} />
				{workout!.exercises!.map((exercise) => {
					return exercise.first ? (
						<Superset
							firstExercise={exercise.first}
							secondExercise={exercise.second}
						/>
					) : (
						<Exercise
							name={exercise.name}
							sets={exercise.sets}
							repsMin={exercise.repsMin}
							repsMax={exercise.repsMax}
							tracked={exercise.tracked}
							path={exercise.path}
						/>
					);
				})}
			</Grid>
		);
	} catch (err) {
		return (
			<Grid className={classes.container}>
				<Title title="Fel" />
			</Grid>
		);
	}
};
