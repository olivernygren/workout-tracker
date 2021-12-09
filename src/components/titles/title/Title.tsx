import { Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

interface ITitle {
	title: string;
}

export const Title = ({ title }: ITitle) => {
	const classes = useStyles();

	return (
		<Typography variant="h3" className={classes.title}>
			{title}
		</Typography>
	);
};
