import {
	Button,
	Checkbox,
	FormGroup,
	Grid,
	Typography,
} from '@material-ui/core';
import { SaveRounded } from '@material-ui/icons';

import useStyles from './styles';

interface IExerciseTrackingCard {
	sets: number;
}

export const ExerciseTrackingCard = ({ sets }: IExerciseTrackingCard) => {
	const classes = useStyles();
	let array: Number[] = [];
	let one = 1;

	for (let i = 1; i < sets || i === sets; i++) {
		array.push(i);
	}

	// if (sets === 4) {
	// 	array = [1, 2, 3, 4];
	// }

	return (
		<Grid container>
			<Grid container item className={classes.container}>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Set
					</Typography>
					{array.map((set) => {
						return (
							<Typography variant="body2" className={classes.prefix}>
								{set}
							</Typography>
						);
					})}
					{/* <Typography variant="body2" className={classes.prefix}>
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
					</Typography> */}
				</Grid>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Reps
					</Typography>
					{array.map((set) => {
						return (
							<Grid item className={classes.data}>
								<input className={classes.input} />
								<Typography variant="body2" className={classes.prefix}>
									reps
								</Typography>
							</Grid>
						);
					})}
					{/* <Grid item className={classes.data}>
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
					</Grid> */}
				</Grid>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Vikt
					</Typography>
					{array.map((set) => {
						return (
							<Grid item className={classes.data}>
								<input className={classes.input} />
								<Typography variant="body2" className={classes.prefix}>
									kg
								</Typography>
							</Grid>
						);
					})}
					{/* <Grid item className={classes.data}>
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
					</Grid> */}
				</Grid>
				<Grid container item direction="column" className={classes.column}>
					<Typography variant="subtitle1" className={classes.columnTitle}>
						Progress
					</Typography>
					<FormGroup>
						{array.map((set) => {
							return <Checkbox size="small" className={classes.checkbox} />;
						})}
						{/* <Checkbox size="small" className={classes.checkbox} />
						<Checkbox size="small" className={classes.checkbox} />
						<Checkbox size="small" className={classes.checkbox} />
						<Checkbox size="small" className={classes.checkbox} /> */}
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
