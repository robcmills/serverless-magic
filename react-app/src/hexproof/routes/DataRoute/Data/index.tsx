import React from 'react';

import { Layout } from 'hexproof/components/Layout';
import { MenuBar } from 'hexproof/components/MenuBar';

import { DataBody } from './DataBody';

export default function Root() {
	return (
		<Layout
			menuBar={<MenuBar />}
			body={<DataBody />}
		/>
	);
}