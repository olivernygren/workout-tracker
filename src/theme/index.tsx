import { createTheme } from '@material-ui/core';

const FONT_PRIMARY = 'Outfit';

export const theme = createTheme({
	typography: {
		fontFamily: [
			FONT_PRIMARY,
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontWeightRegular: 400,
		h1: {
			fontWeight: 600,
			fontSize: 80,
		},
		h2: {
			fontWeight: 600,
			fontSize: 66,
		},
		h3: {
			fontWeight: 700,
			fontSize: 48,
		},
		h4: {
			fontWeight: 600,
			fontSize: 40,
		},
		h5: {
			fontWeight: 500,
			fontSize: 32,
		},
		h6: {
			fontWeight: 500,
			fontSize: 20,
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: 18,
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: 18,
		},
		body1: {
			fontWeight: 400,
			fontSize: 16,
		},
		body2: {
			fontWeight: 400,
			fontSize: 16,
		},
	},
	palette: {
		primary: {
			light: '#2b2b2b',
			main: '#212121',
			dark: '#121212',
		},
		secondary: {
			light: '#ed3b3b',
			main: '#ff2424',
			dark: '#c21f1f',
		},
	},
});
