import { ThemeProvider } from '@material-ui/core';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './index.css';
import './App.css';
import { routes } from './routes';
import { theme } from './theme';
import { Menu } from './components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					{routes.map(({ route, element }, key) => (
						<Route path={route} element={element} key={key} />
					))}
				</Routes>
				<Menu />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
