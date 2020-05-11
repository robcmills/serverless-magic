import { ISet } from 'hexproof/types/ISet';
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject';

import { scryfallApi } from 'hexproof/scryfall/api';

interface IScryfallService {
	downloadBulkDataObjects: () => Promise<IScryFallBulkDataObject[]>;
	downloadSets: () => Promise<ISet[]>;
	getSetIcon: (iconSvgUri: string) => Promise<string>;
}

export const scryfallService: IScryfallService = {
	downloadBulkDataObjects: async (): Promise<IScryFallBulkDataObject[]> => {
		return scryfallApi.downloadBulkDataObjects();
	},
	downloadSets: async (): Promise<ISet[]> => {
		return scryfallApi.downloadSets();
	},
	getSetIcon: async (iconSvgUri: string): Promise<string> => {
		return scryfallApi.getSetIcon(iconSvgUri);
	},
}
