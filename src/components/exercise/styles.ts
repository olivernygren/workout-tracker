import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	card: {
		padding: '12px',
		backgroundColor: theme.palette.primary.light,
		borderRadius: 10,
		margin: '20px 0',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	exerciseName: {
		textTransform: 'capitalize',
	},
	info: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		marginLeft: 8,
		marginRight: '-4px',
	},
}));
