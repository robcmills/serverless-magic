import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { DataRoute } from 'routes/DataRoute';
import { RootRoute } from 'routes/RootRoute';

export function Router() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
	        {/*<Route path="/data">
	          <DataRoute />
	        </Route>*/}
	        <Route path="/" component={RootRoute} />
	      </Switch>
	    </Suspense>
		</BrowserRouter>
	);
}
