import { IListObject } from 'hexproof/types/IListObject';
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject';
import { ISet } from 'hexproof/types/ISet';

interface IScryfallApi {
  downloadBulkDataObjects: () => Promise<IScryFallBulkDataObject[]>;
  downloadSets: () => Promise<ISet[]>;
  getSetIcon: (iconSvgUri: string) => Promise<string>;
}

const apiRoot = 'https://api.scryfall.com';

export const scryfallApi: IScryfallApi = {
  downloadBulkDataObjects: async (): Promise<IScryFallBulkDataObject[]> => {
    return fetch(apiRoot + '/bulk-data')
      .then((response) => {
        return response.json();
      })
      .then((data: IListObject<IScryFallBulkDataObject>) => {
        return data.data;
      });
  },
  downloadSets: async (): Promise<ISet[]> => {
    return fetch(apiRoot + '/sets')
      .then((response) => {
        return response.json();
      })
      .then((data: IListObject<ISet>) => {
        return data.data;
      });
  },
  getSetIcon: async (iconSvgUri: string): Promise<string> => {
    return fetch(iconSvgUri)
      .then((response) => {
        return response.text();
      });
  },
}
