import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { DateRangeRounded } from '@material-ui/icons';

interface IRestDayCard {
	day:
		| 'Måndag'
		| 'Tisdag'
		| 'Onsdag'
		| 'Torsdag'
		| 'Fredag'
		| 'Lördag'
		| 'Söndag';
}

export const RestDayCard = ({ day }: IRestDayCard) => {
	const classes = useStyles();
	return (
		<Grid container item className={classes.container}>
			<Grid container item className={classes.header}>
				<Typography variant="subtitle1" className={classes.title}>
					VILA
				</Typography>
				<Grid item className={classes.day}>
					<DateRangeRounded className={classes.icon} />
					<Typography variant="body1">{day}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
