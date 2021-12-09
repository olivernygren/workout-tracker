import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { Title } from '../../components';

export const Home = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.container}>
			<Title title="Hem" />
		</Grid>
	);
};
