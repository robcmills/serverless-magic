import { IListObject } from 'hexproof/types/IListObject';
import { ISet } from 'hexproof/types/ISet';

interface IScryfallApi {
	downloadSets: () => Promise<ISet[]>;
}

const apiRoot = 'https://api.scryfall.com';

export const scryfallApi: IScryfallApi = {
	downloadSets: async (): Promise<ISet[]> => {
		return fetch(apiRoot + '/sets')
		  .then((response) => {
		    return response.json();
		  })
		  .then((data: IListObject<ISet>) => {
		    return data.data;
		  });
	},
}
