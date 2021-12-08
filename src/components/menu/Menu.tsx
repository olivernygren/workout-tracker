import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { menuOptions } from '../../utils';

export const Menu = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.backdrop}>
			<Grid item container className={classes.container}>
				{menuOptions.map((option) => {
					return (
						<Link to={option.route} className={classes.link}>
							<Grid item className={classes.menuOption}>
								{option.icon}
								<Typography>{option.label}</Typography>
							</Grid>
						</Link>
					);
				})}
			</Grid>
		</Grid>
	);
};
