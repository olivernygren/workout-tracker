import { Button, IconButton } from '@material-ui/core';
import { ChevronLeftRounded } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

export const NavigateBack = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		// <Button
		// 	startIcon={<ChevronLeftRounded className={classes.icon} />}
		// 	onClick={() => navigate(-1)}
		// 	className={classes.button}
		// >
		// 	Tillbaka
		// </Button>
		<IconButton onClick={() => navigate(-1)} className={classes.button}>
			<ChevronLeftRounded fontSize="large" className={classes.icon} />
		</IconButton>
	);
};
