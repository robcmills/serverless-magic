import { open } from 'hexproof/db/open';
import { onUpgradeNeeded } from 'hexproof/db/onUpgradeNeeded';

const dbName = 'hexproof';
const dbVersion = 3;

interface IDatabase {
	db: IDBDatabase | null;
	openPromise: Promise<void> | null;
	openError: any;
	// setsCount: () => ISetsCount;
}

export const db: IDatabase = {
	db: null,
	openPromise: null,
	openError: null,
};

db.openPromise = open(
	dbName,
	dbVersion,
	onUpgradeNeeded,
).then((value: IDBDatabase | null) => {
	db.db = value;
}).catch(error => {
	db.openError = error;
});
