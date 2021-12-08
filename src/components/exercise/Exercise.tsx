import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { DateRangeRounded } from '@material-ui/icons';

export const Exercise = () => {
	// const classes = useStyles();
	return (
		<Grid container item>
			<Grid container item>
				<Typography variant="h6">Incline Dumbbell Press</Typography>
				<Grid item>
					<DateRangeRounded />
					<Typography variant="body1">Tisdag 7 dec</Typography>
				</Grid>
			</Grid>
			<Grid container item>
				<Typography variant="body2">6 övningar</Typography>
				<Typography variant="body2">24 set</Typography>
				<Typography variant="body2">368 reps</Typography>
			</Grid>
		</Grid>
	);
};
