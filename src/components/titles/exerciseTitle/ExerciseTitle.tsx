import { Grid, Typography } from '@material-ui/core';
import { NavigateBack } from '../../navigateBack';

import useStyles from './styles';

interface IExerciseTitle {
	title: string;
}

export const ExerciseTitle = ({ title }: IExerciseTitle) => {
	const classes = useStyles();

	return (
		<Grid item className={classes.container}>
			<NavigateBack />
			<Typography variant="h6" className={classes.title}>
				{title}
			</Typography>
		</Grid>
	);
};
