import React from 'react';

import { Layout } from 'hexproof/components/Layout';

import { DataMenuBar } from './DataMenuBar';
import { DataBody } from './DataBody';

export default function Data() {
	return (
		<Layout
			menuBar={<DataMenuBar />}
			body={<DataBody />}
		/>
	);
}
