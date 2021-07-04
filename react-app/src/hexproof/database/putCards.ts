import { IScryFallCard } from 'hexproof/types/IScryFallCard'

import { database } from 'hexproof/database'

export const putCards = async (
  cards: IScryFallCard[],
  onProgress: (progress: number) => void,
): Promise<void> => {
  const db: IDBDatabase | null = await database.getIndexedDB()
  if (!db) {
    throw new Error('Could not open database')
  }
  const transaction: IDBTransaction = db.transaction('cards', 'readwrite')
  const objectStore: IDBObjectStore = transaction.objectStore('cards')

  let added = 0
  const promises: Promise<void>[] = []

  cards.forEach((card: IScryFallCard) => {
    promises.push(new Promise((resolve, reject) => {
      const request: IDBRequest = objectStore.put(card)
      request.onerror = function(event) {
        console.error('Add cards transaction error', request, event)
        reject(new Error('Could not complete `addCards` transaction'))
      }
      request.onsuccess = function(event) {
        onProgress(added++ / cards.length)
        resolve()
      }
    }))
  })
  await Promise.all(promises)
}
