import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.light,
		width: '100%',
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		margin: '20px 0',
		padding: 14,
		justifyContent: 'space-between',
		flexWrap: 'nowrap',
	},
	title: {
		textTransform: 'uppercase',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	columnTitle: {
		marginBottom: 6,
		color: theme.palette.secondary.main,
	},
	prefix: {
		margin: '3px 0',
		display: 'flex',
	},
	checkbox: {
		padding: 3,
		margin: 0,
		color: theme.palette.common.white,
	},
	input: {
		width: 30,
		height: 24,
		color: theme.palette.common.white,
		marginRight: 6,
		border: 'none',
		borderRadius: 5,
		backgroundColor: theme.palette.primary.main,
		fontFamily: 'Outfit',
		textAlign: 'center',
		'&:focus': {
			outline: 'none',
			border: 'none',
		},
	},
	data: {
		display: 'flex',
		alignItems: 'center',
	},
}));
