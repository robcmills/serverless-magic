// interfaces
import { IScryFallCard } from 'hexproof/types/IScryFallCard'
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject'

import {
  DOWNLOAD_BULK_DATA_OBJECT_COMPLETE,
  DOWNLOAD_BULK_DATA_OBJECT_PROGRESS,
} from 'hexproof/redux/bulkDataObjects/actionTypes'

import { scryfallApi } from 'hexproof/scryfall/api'
import { putCards } from 'hexproof/database/putCards'

export async function downloadBulkDataObject(bulkDataObject: IScryFallBulkDataObject) {
  if (bulkDataObject.type === 'rulings') {
    return
  }

  const cards: IScryFallCard[] = await scryfallApi.downloadBulkCards(bulkDataObject.download_uri)
  let lastFlooredProgress = 0
  const onProgress = (progress: number) => {
    const currentFlooredProgress = Math.floor(progress * 100)
    if (currentFlooredProgress > lastFlooredProgress) {
      lastFlooredProgress = currentFlooredProgress
      self.postMessage({
        type: DOWNLOAD_BULK_DATA_OBJECT_PROGRESS,
        payload: {
          bulkDataObject,
          progress: lastFlooredProgress,
        },
      })
    }
  }
  await putCards(cards, onProgress)
  self.postMessage({
    type: DOWNLOAD_BULK_DATA_OBJECT_COMPLETE,
    payload: {
      bulkDataObject,
    },
  })
}