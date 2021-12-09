import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	title: {
		textTransform: 'capitalize',
		marginLeft: 8,
	},
	container: {
		position: 'absolute',
		top: 34,
		left: 16,
		zIndex: 11,
		display: 'flex',
		alignItems: 'center',
	},
}));
