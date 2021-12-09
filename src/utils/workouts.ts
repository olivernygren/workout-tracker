import { exerciseNameToPath, exercises } from '.';

const legs = exercises.chest;

export const workouts = [
	{
		title: 'LEGS 1',
		path: '/program/week-1/legs-1',
		exercises: [
			{
				name: legs.INCLINE_DUMBBELL_PRESS.name,
				sets: 4,
				repsMin: 8,
				repsMax: 12,
				tracked: true,
				path: exerciseNameToPath(legs.INCLINE_DUMBBELL_PRESS.name),
			},
			{
				name: legs.FLAT_MACHINE_PRESS.name,
				sets: 4,
				repsMin: 10,
				repsMax: 15,
				tracked: true,
				path: exerciseNameToPath(legs.FLAT_MACHINE_PRESS.name),
			},
			{
				name: legs.SEATED_CABLE_FLY.name,
				sets: 3,
				repsMin: 10,
				repsMax: 20,
				tracked: false,
				path: exerciseNameToPath(legs.SEATED_CABLE_FLY.name),
			},
			{
				first: {
					name: legs.SEATED_CABLE_FLY.name,
					sets: 3,
					repsMin: 10,
					repsMax: 20,
					tracked: false,
					path: exerciseNameToPath(legs.SEATED_CABLE_FLY.name),
				},
				second: {
					name: legs.FLAT_MACHINE_PRESS.name,
					sets: 3,
					repsMin: 8,
					repsMax: 12,
					tracked: false,
					path: exerciseNameToPath(legs.FLAT_MACHINE_PRESS.name),
				},
			},
		],
	},
	{
		title: 'PUSH 1',
		path: '/program/week-1/push-1',
		exercises: [
			{
				name: legs.INCLINE_DUMBBELL_PRESS.name,
				sets: 40,
				repsMin: 8,
				repsMax: 12,
				tracked: true,
				path: exerciseNameToPath(legs.INCLINE_DUMBBELL_PRESS.name),
			},
			{
				name: legs.FLAT_MACHINE_PRESS.name,
				sets: 4,
				repsMin: 10,
				repsMax: 15,
				tracked: true,
				path: exerciseNameToPath(legs.FLAT_MACHINE_PRESS.name),
			},
			{
				name: legs.SEATED_CABLE_FLY.name,
				sets: 3,
				repsMin: 10,
				repsMax: 20,
				tracked: false,
				path: exerciseNameToPath(legs.SEATED_CABLE_FLY.name),
			},
		],
	},
];
