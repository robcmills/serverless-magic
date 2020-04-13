import React from 'react';

import { Provider } from 'react-redux';
import { store } from 'hexproof/redux/store';

import { Router } from './Router';

export function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}
