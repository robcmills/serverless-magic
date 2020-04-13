import React from 'react';

import { Layout } from 'hexproof/components/Layout';
import { MenuBar } from 'hexproof/components/MenuBar';

import { SetsBody } from './SetsBody';

export default function Sets() {
	return (
		<Layout
			menuBar={<MenuBar />}
			body={<SetsBody />}
		/>
	);
}
