import React from 'react';

import { Layout } from 'hexproof/components/Layout';
import { MenuBar } from 'hexproof/components/MenuBar';

import { Splash } from './Splash';

export default function Root() {
	return (
		<Layout
			menuBar={<MenuBar />}
			body={<Splash />}
		/>
	);
}
