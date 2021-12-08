import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { RestDayCard, Title, WorkoutCard } from '../../components';

export const Home = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.container}>
			<Title title="Hem" />
			<WorkoutCard
				title="Push 1"
				day="Tisdag"
				path="/test"
				exercises={6}
				sets={24}
				reps={368}
			/>
			<WorkoutCard
				title="Pull 1"
				day="Onsdag"
				path="/test"
				exercises={6}
				sets={24}
				reps={368}
			/>
			<RestDayCard day="Torsdag" />
			<WorkoutCard
				title="Legs 2"
				day="Fredag"
				path="/test"
				exercises={6}
				sets={24}
				reps={368}
			/>
			<WorkoutCard
				title="Push 2"
				day="Lördag"
				path="/test"
				exercises={6}
				sets={24}
				reps={368}
			/>
			<WorkoutCard
				title="Pull 2"
				day="Söndag"
				path="/test"
				exercises={6}
				sets={24}
				reps={368}
			/>
		</Grid>
	);
};
