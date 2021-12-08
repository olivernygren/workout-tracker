import { Paper } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

export const HeaderBackground = () => {
	const classes = useStyles();
	return <Paper className={classes.container} />;
};
