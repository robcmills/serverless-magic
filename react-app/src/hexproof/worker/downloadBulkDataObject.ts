// interfaces
import { IScryFallCard } from 'hexproof/types/IScryFallCard'
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject'

import { scryfallApi } from 'hexproof/scryfall/api'

export async function downloadBulkDataObject(bulkDataObject: IScryFallBulkDataObject) {
	console.log('download bulk data object', bulkDataObject)

	if (bulkDataObject.type === 'rulings') {
		return
	}

	const cards: IScryFallCard[] = await scryfallApi.downloadBulkCards(bulkDataObject.download_uri)

	console.log('cards', cards)
}