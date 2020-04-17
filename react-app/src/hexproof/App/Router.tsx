import React, { useCallback, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { data } from 'hexproof/data';
import { routes } from 'hexproof/routes';
import { LoadingScreen } from 'hexproof/components/LoadingScreen';

import { setHashAction } from 'hexproof/redux/route/actions';
import { hashSelector } from 'hexproof/redux/route/selectors';

export function Router() {
	const hash = useSelector(hashSelector);

	useEffect(() => {
		data.replicateSets();
	}, []);

	const handleHashChange = useCallback(() => {
    setHashAction(window.location.hash || '/');
  }, []);

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
	    window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  const route = routes[hash] || 'That route does not exist';

	return (
		<Suspense fallback={<LoadingScreen />}>
		  {route}
    </Suspense>
	);
}
