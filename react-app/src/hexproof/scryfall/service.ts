import { ISet } from 'hexproof/types/ISet';
import { scryfallApi } from 'hexproof/scryfall/api';

interface IScryfallService {
	downloadSets: () => Promise<ISet[]>;
}

export const scryfallService: IScryfallService = {
	downloadSets: async (): Promise<ISet[]> => {
		return scryfallApi.downloadSets();
	},
}
