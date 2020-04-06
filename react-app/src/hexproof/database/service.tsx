import { database } from 'hexproof/database';

interface IDatabaseService {
	getLocalSetsCount: () => Promise<number>;
}

export const databaseService: IDatabaseService = {
	getLocalSetsCount: async (): Promise<number> => {
		const db: IDBDatabase | null = await database.getIndexedDB();
		if (!db) {
			throw new Error('Could not open database');
		}
		const transaction: IDBTransaction = db.transaction('sets');
		const objectStore: IDBObjectStore = transaction.objectStore('sets');

		return await new Promise((resolve, reject) => {
			const request: IDBRequest = objectStore.count();
			request.onerror = function(event) {
				console.error('transaction error', request, event);
				reject(new Error('Could not complete transaction'));
			};
			request.onsuccess = function(event) {
			  resolve(request.result);
			};
		});
	},
}
