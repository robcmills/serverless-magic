import React from 'react';

import { Layout } from 'hexproof/components/Layout';

import { CardsMenuBar } from './CardsMenuBar';
import { CardsBody } from './CardsBody';

export default function Cards() {
	return (
		<Layout
			menuBar={<CardsMenuBar />}
			body={<CardsBody />}
		/>
	);
}
