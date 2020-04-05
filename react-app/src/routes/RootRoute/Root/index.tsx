import React from 'react';

import { Layout } from 'components/Layout';
import { MenuBar } from 'components/MenuBar';

import { Splash } from './Splash';

export default function Root() {
	return (
		<Layout
			menuBar={<MenuBar />}
			body={<Splash />}
		/>
	);
}
