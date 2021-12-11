import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { program } from '../../utils';
import { RestDayCard, Title, WorkoutCard } from '../../components';

export const Workouts = () => {
	const classes = useStyles();

	const getTypeOfDay = (day: any) => {
		if (day.exercises) {
			return (
				<WorkoutCard
					title={day.title}
					day={day.day}
					path={day.path}
					exercises={day.exercises.length}
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
