import {
	Button,
	Checkbox,
	FormControl,
	FormGroup,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';

import useStyles from './styles';
import {
	DateRangeRounded,
	ChevronRightRounded,
	SaveRounded,
} from '@material-ui/icons';

interface IExerciseTrackingCard {
	sets: number;
}

export const ExerciseTrackingCard = ({ sets }: IExerciseTrackingCard) => {
	const classes = useStyles();

	return (
		<Grid container>
			<Grid container item className={classes.container}>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Set
					</Typography>
					<Typography variant="body2" className={classes.prefix}>
						1
					</Typography>
					<Typography variant="body2" className={classes.prefix}>
						2
					</Typography>
					<Typography variant="body2" className={classes.prefix}>
						3
					</Typography>
					<Typography variant="body2" className={classes.prefix}>
						4
					</Typography>
				</Grid>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Reps
					</Typography>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							reps
						</Typography>
					</Grid>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							reps
						</Typography>
					</Grid>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							reps
						</Typography>
					</Grid>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							reps
						</Typography>
					</Grid>
				</Grid>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Vikt
					</Typography>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							kg
						</Typography>
					</Grid>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							kg
						</Typography>
					</Grid>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							kg
						</Typography>
					</Grid>
					<Grid item className={classes.data}>
						<input className={classes.input} />
						<Typography variant="body2" className={classes.prefix}>
							kg
						</Typography>
					</Grid>
				</Grid>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Progress
					</Typography>
					<FormGroup>
						<Checkbox
							color="success"
							size="small"
							className={classes.checkbox}
						/>
						<Checkbox
							color="success"
							size="small"
							className={classes.checkbox}
						/>
						<Checkbox
							color="success"
							size="small"
							className={classes.checkbox}
						/>
						<Checkbox
							color="success"
							size="small"
							className={classes.checkbox}
						/>
					</FormGroup>
				</Grid>
			</Grid>
			<Button
				variant="contained"
				color="secondary"
				endIcon={<SaveRounded />}
				fullWidth
			>
				Spara
			</Button>
		</Grid>
	);
};
