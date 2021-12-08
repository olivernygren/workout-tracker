import { Button, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { DateRangeRounded, ChevronRightRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface IWorkoutCard {
	title: string;
	day:
		| 'Måndag'
		| 'Tisdag'
		| 'Onsdag'
		| 'Torsdag'
		| 'Fredag'
		| 'Lördag'
		| 'Söndag';
	path: string;
	exercises: number;
	sets: number;
	reps: number;
}

export const WorkoutCard = ({
	title,
	day,
	path,
	exercises,
	sets,
	reps,
}: IWorkoutCard) => {
	const classes = useStyles();
	return (
		<Grid container item className={classes.container}>
			<Grid container item className={classes.header}>
				<Typography variant="subtitle1" className={classes.title}>
					{title}
				</Typography>
				<Grid item className={classes.day}>
					<DateRangeRounded className={classes.icon} />
					<Typography variant="body1">{day}</Typography>
				</Grid>
			</Grid>
			<Grid container item className={classes.lower}>
				<Grid item className={classes.info}>
					<Typography variant="body2">{exercises + ' övningar'}</Typography>
					<Typography variant="body2">{sets + ' set'}</Typography>
					<Typography variant="body2">{reps + ' reps'}</Typography>
				</Grid>
				<Link to={path} className={classes.button}>
					<Button variant="contained" color="secondary">
						Se passet
						<ChevronRightRounded />
					</Button>
				</Link>
			</Grid>
		</Grid>
	);
};
