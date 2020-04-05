export function onUpgradeNeeded(
	this: IDBOpenDBRequest,
	event: IDBVersionChangeEvent,
): any {
  if (!this || !this.result) {
    return;
  }
  const indexedDB: IDBDatabase = this.result;

  const objectStore: IDBObjectStore = indexedDB.createObjectStore(
  	'sets',
  	{ keyPath: 'id' },
  );
  objectStore.createIndex('code', 'code', { unique: true });
  objectStore.createIndex('name', 'name', { unique: true });
}