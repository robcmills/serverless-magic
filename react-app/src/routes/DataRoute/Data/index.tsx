import React from 'react';

import { Layout } from 'components/Layout';
import { MenuBar } from 'components/MenuBar';

import { DataBody } from './DataBody';

export default function Root() {
	return (
		<Layout
			menuBar={<MenuBar />}
			body={<DataBody />}
		/>
	);
}
