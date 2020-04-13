import { database } from 'hexproof/database';
import { ISet } from 'hexproof/types/ISet';

interface IDatabaseService {
	getLocalSetsCount: () => Promise<number>;
	hydrateSets: (sets: ISet[]) => Promise<void>;
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
				reject(new Error('Could not complete `getLocalSetsCount` transaction'));
			};
			request.onsuccess = function(event) {
			  resolve(request.result);
			};
		});
	},
	hydrateSets: async (sets: ISet[]): Promise<void> => {
		const db: IDBDatabase | null = await database.getIndexedDB();
		if (!db) {
			throw new Error('Could not open database');
		}
		const transaction: IDBTransaction = db.transaction('sets', 'readwrite');
		const objectStore: IDBObjectStore = transaction.objectStore('sets');

		const promises: Promise<void>[] = [];
		sets.forEach((set: ISet) => {
			promises.push(new Promise((resolve, reject) => {
				const request: IDBRequest = objectStore.add(set);
				request.onerror = function(event) {
					console.error('Hydrate set transaction error', request, event);
					reject(new Error('Could not complete `hydrateSets` transaction'));
				};
				request.onsuccess = function(event) {
				  resolve();
				};
			}));
		});
		await Promise.all(promises);
	},
}
