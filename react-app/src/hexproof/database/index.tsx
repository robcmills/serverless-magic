import { open } from 'hexproof/database/open';
import { onUpgradeNeeded } from 'hexproof/database/onUpgradeNeeded';

const dbName = 'hexproof';
const dbVersion = 3;

interface IDatabase {
	dbName: string;
	dbVersion: number;
	getIndexedDB: () => Promise<IDBDatabase | null>;
	indexedDB: IDBDatabase | null;
	openPromise: Promise<IDBDatabase | null>;
	openError: any;
}

export const database: IDatabase = {
	dbName,
	dbVersion,
	getIndexedDB: async function() {
		return this.indexedDB
		  ? this.indexedDB
		  : await this.openPromise;
	},
	indexedDB: null,
	openPromise: open(
		dbName,
		dbVersion,
		onUpgradeNeeded,
	).then((value: IDBDatabase | null) => {
		database.indexedDB = value;
		return value;
	}),
	openError: null,
};
