import { IListObject } from 'hexproof/types/IListObject'
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject'
import { IScryFallCard } from 'hexproof/types/IScryFallCard'
import { ISet } from 'hexproof/types/ISet'

const apiRoot = 'https://api.scryfall.com'

export const scryfallApi = {
  downloadBulkCards: async (download_uri: string): Promise<IScryFallCard[]> => {
    return fetch(download_uri)
      .then((response) => {
        return response.json()
      })
      .then((cards: IScryFallCard[]) => {
        return cards
      })
  },
  downloadBulkDataObjects: async (): Promise<IScryFallBulkDataObject[]> => {
    return fetch(apiRoot + '/bulk-data')
      .then((response) => {
        return response.json()
      })
      .then((data: IListObject<IScryFallBulkDataObject>) => {
        return data.data
      })
  },
  downloadSets: async (): Promise<ISet[]> => {
    return fetch(apiRoot + '/sets')
      .then((response) => {
        return response.json()
      })
      .then((data: IListObject<ISet>) => {
        return data.data
      })
  },
  getSetIcon: async (iconSvgUri: string): Promise<string> => {
    return fetch(iconSvgUri)
      .then((response) => {
        return response.text()
      })
  },
}
