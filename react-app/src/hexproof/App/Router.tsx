import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { data } from 'hexproof/data';
import { LoadingScreen } from 'hexproof/components/LoadingScreen';
import { DataRoute } from 'hexproof/routes/DataRoute';
import { RootRoute } from 'hexproof/routes/RootRoute';
import { SetsRoute } from 'hexproof/routes/SetsRoute';

export function Router() {
	useEffect(() => {
		data.replicateSets();
	}, []);

	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingScreen />}>
				<Switch>
	        <Route path="/" component={RootRoute} exact={true} />
	        <Route path="/data" component={DataRoute} />
	        <Route path="/sets" component={SetsRoute} />
	      </Switch>
	    </Suspense>
		</BrowserRouter>
	);
}
