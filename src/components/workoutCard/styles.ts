import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.light,
		width: '100%',
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'column',
		margin: '20px 0',
		padding: 14,
	},
	title: {
		textTransform: 'uppercase',
	},
	header: {
		justifyContent: 'space-between',
	},
	day: {
		display: 'flex',
	},
	icon: {
		color: theme.palette.common.white,
		marginRight: 6,
	},
	lower: {
		justifyContent: 'space-between',
	},
	info: {
		marginTop: 6,
	},
	button: {
		display: 'flex',
		alignSelf: 'end',
	},
}));
