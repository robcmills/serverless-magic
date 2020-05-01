import { ISet } from 'hexproof/types/ISet';
import { scryfallApi } from 'hexproof/scryfall/api';

interface IScryfallService {
	downloadSets: () => Promise<ISet[]>;
	getSetIcon: (iconSvgUri: string) => Promise<string>;
}

export const scryfallService: IScryfallService = {
	getSetIcon: async (iconSvgUri: string): Promise<string> => {
		return scryfallApi.getSetIcon(iconSvgUri);
	},
	downloadSets: async (): Promise<ISet[]> => {
		return scryfallApi.downloadSets();
	},
}
