import React from 'react';

import { Layout } from 'hexproof/components/Layout';

import { SetsMenuBar } from './SetsMenuBar';
import { SetsBody } from './SetsBody';

export default function Sets() {
	return (
		<Layout
			menuBar={<SetsMenuBar />}
			body={<SetsBody />}
		/>
	);
}
