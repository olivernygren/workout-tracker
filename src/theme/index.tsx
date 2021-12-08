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
			fontSize: 40,
			color: '#fff',
		},
		h2: {
			fontWeight: 600,
			fontSize: 34,
			color: '#fff',
		},
		h3: {
			fontWeight: 700,
			fontSize: 30,
			color: '#fff',
		},
		h4: {
			fontWeight: 600,
			fontSize: 26,
			color: '#fff',
		},
		h5: {
			fontWeight: 600,
			fontSize: 24,
			color: '#fff',
		},
		h6: {
			fontWeight: 600,
			fontSize: 22,
			color: '#fff',
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: 18,
			color: '#fff',
		},
		subtitle2: {
			fontWeight: 400,
			fontSize: 18,
			color: '#fff',
		},
		body1: {
			fontWeight: 300,
			fontSize: 16,
			color: '#fff',
		},
		body2: {
			fontWeight: 300,
			fontSize: 16,
			color: '#fff',
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
		common: {
			white: '#fff',
			black: '#000',
		},
	},
});
