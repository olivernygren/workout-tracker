import React from 'react';
import {
	EventNoteRounded,
	HomeRounded,
	AssessmentRounded,
} from '@material-ui/icons';

export const menuOptions = [
	{
		label: 'Hem',
		icon: <HomeRounded fontSize="large" />,
		route: '/',
		isActive: true,
	},
	{
		label: 'Pass',
		icon: <EventNoteRounded fontSize="large" />,
		route: '/workouts',
		isActive: false,
	},
	{
		label: 'Tracker',
		icon: <AssessmentRounded fontSize="large" />,
		route: '/tracker',
		isActive: false,
	},
];
