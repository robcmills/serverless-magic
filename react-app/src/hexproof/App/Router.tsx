import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { data } from 'hexproof/data';
import { LoadingScreen } from 'hexproof/components/LoadingScreen';
import { DataRoute } from 'hexproof/routes/DataRoute';
import { RootRoute } from 'hexproof/routes/RootRoute';

export function Router() {
	useEffect(() => {
		data.replicateSets();
	}, []);

	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingScreen />}>
				<Switch>
	        <Route path="/data" component={DataRoute} />
	        <Route path="/" component={RootRoute} />
	      </Switch>
	    </Suspense>
		</BrowserRouter>
	);
}
