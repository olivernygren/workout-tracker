import { Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

interface IExerciseTitle {
	title: string;
}

export const ExerciseTitle = ({ title }: IExerciseTitle) => {
	const classes = useStyles();

	return (
		<Typography variant="h6" className={classes.title}>
			{title}
		</Typography>
	);
};
