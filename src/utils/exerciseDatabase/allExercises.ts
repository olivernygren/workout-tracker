import { exerciseNameToPath } from '../converters';

export const exercises = {
	chest: {
		INCLINE_DUMBBELL_PRESS: {
			name: 'Incline Dumbbell Press',
			path: exerciseNameToPath('Incline Dumbbell Press'),
		},
		SEATED_CABLE_FLY: {
			name: 'Seated Cable Fly',
			path: exerciseNameToPath('Seated Cable Fly'),
		},
		FLAT_MACHINE_PRESS: {
			name: 'Flat Machine Press',
			path: exerciseNameToPath('Flat Machine Press'),
		},
	},
};
