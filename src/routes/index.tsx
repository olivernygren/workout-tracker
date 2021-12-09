import {
	Test,
	Home,
	Workouts,
	Tracker,
	Workout,
	ExerciseTracker,
} from '../pages';

export const routes = [
	{
		route: '/',
		element: <Home />,
	},
	{
		route: '/test',
		element: <Test />,
	},
	{
		route: '/workouts',
		element: <Workouts />,
	},
	{
		route: '/tracker',
		element: <Tracker />,
	},
	{
		route: '/program/:week/:workout',
		element: <Workout />,
	},
	{
		route: '/exercises/:exercise',
		element: <ExerciseTracker />,
	},
];
