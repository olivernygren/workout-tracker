import React from 'react';
import { Test, Home, Workouts, Tracker } from '../pages';

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
];
