import { Paper } from '@material-ui/core';

import useStyles from './styles';

export const HeaderBackground = () => {
	const classes = useStyles();
	return <Paper className={classes.container} elevation={3} />;
};
