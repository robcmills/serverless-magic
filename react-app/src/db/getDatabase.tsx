
export function getDatabase(
	name: string,
	version: number,
): Promise<null | IDBDatabase> {
	return new Promise((resolve, reject) => {
		if (!window.indexedDB) {
		  console.error("Your browser does not support IndexedDB.");
		  reject(null);
		}

		const request: IDBOpenDBRequest = window.indexedDB.open(name, version);

		request.onerror = function() {
		  console.error('Error loading database');
		  reject(null);
		};

		request.onsuccess = function() {
		  console.log('Database initialised');
		  resolve(request.result);
		};
	});
}
