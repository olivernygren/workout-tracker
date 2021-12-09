import { exerciseNameToPath, exercises } from '.';

const e = exercises.chest;

export const workouts = [
	{
		title: 'LEGS 1',
		path: '/program/week-1/legs-1',
		exercises: [
			{
				name: e.INCLINE_DUMBBELL_PRESS.name,
				sets: 4,
				repsMin: 8,
				repsMax: 12,
				tracked: true,
				path: exerciseNameToPath(e.INCLINE_DUMBBELL_PRESS.name),
			},
			{
				name: e.FLAT_MACHINE_PRESS.name,
				sets: 4,
				repsMin: 10,
				repsMax: 15,
				tracked: true,
				path: exerciseNameToPath(e.FLAT_MACHINE_PRESS.name),
			},
			{
				name: e.SEATED_CABLE_FLY.name,
				sets: 3,
				repsMin: 10,
				repsMax: 20,
				tracked: false,
				path: exerciseNameToPath(e.SEATED_CABLE_FLY.name),
			},
			{
				first: {
					name: e.SEATED_CABLE_FLY.name,
					sets: 3,
					repsMin: 10,
					repsMax: 20,
					tracked: false,
					path: exerciseNameToPath(e.SEATED_CABLE_FLY.name),
				},
				second: {
					name: e.FLAT_MACHINE_PRESS.name,
					sets: 3,
					repsMin: 8,
					repsMax: 12,
					tracked: false,
					path: exerciseNameToPath(e.FLAT_MACHINE_PRESS.name),
				},
			},
		],
	},
	{
		title: 'PUSH 1',
		path: '/program/week-1/push-1',
		exercises: [
			{
				name: e.INCLINE_DUMBBELL_PRESS.name,
				sets: 40,
				repsMin: 8,
				repsMax: 12,
				tracked: true,
				path: exerciseNameToPath(e.INCLINE_DUMBBELL_PRESS.name),
			},
			{
				name: e.FLAT_MACHINE_PRESS.name,
				sets: 4,
				repsMin: 10,
				repsMax: 15,
				tracked: true,
				path: exerciseNameToPath(e.FLAT_MACHINE_PRESS.name),
			},
			{
				name: e.SEATED_CABLE_FLY.name,
				sets: 3,
				repsMin: 10,
				repsMax: 20,
				tracked: false,
				path: exerciseNameToPath(e.SEATED_CABLE_FLY.name),
			},
		],
	},
];
