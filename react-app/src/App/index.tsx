import React from 'react';

import { Router } from './Router';

import dbPromise from './database';
dbPromise.then(db => {
	console.log('db', db);
})

export function App() {
	return (
		<Router />
	);
}
