import { ThemeProvider } from '@material-ui/core';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './index.css';
import { routes } from './routes';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					{routes.map(({ route, element }, key) => (
						<Route path={route} element={element} key={key} />
					))}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
