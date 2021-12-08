import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.light,
		height: 70,
		width: '100%',
		position: 'fixed',
		bottom: 0,
		borderRadius: '10px 10px 0 0',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	menuOption: {
		color: theme.palette.common.white,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 8px',
	},
	link: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));
