import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.light,
		height: 90,
		width: '100%',
		borderBottomRightRadius: 60,
		position: 'absolute',
		top: 0,
		zIndex: 0,
	},
}));
