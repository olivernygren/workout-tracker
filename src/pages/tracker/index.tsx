import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { Title } from '../../components';

export const Tracker = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.container}>
			<Title title="Tracker" />
		</Grid>
	);
};
