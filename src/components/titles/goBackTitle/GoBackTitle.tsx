import { Grid, Typography } from '@material-ui/core';
import { NavigateBack } from '../../navigateBack';

import useStyles from './styles';

interface IGoBackTitle {
	title: string | undefined;
}

export const GoBackTitle = ({ title }: IGoBackTitle) => {
	const classes = useStyles();

	return (
		<Grid item className={classes.container}>
			<NavigateBack />
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
		</Grid>
	);
};
