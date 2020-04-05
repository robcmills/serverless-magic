
export function open(
	name: string,
	version: number,
	onupgradeneeded: ((this: IDBOpenDBRequest, event: IDBVersionChangeEvent) => any) | null,
): Promise<null | IDBDatabase> {
	return new Promise((resolve, reject) => {
		if (!window.indexedDB) {
		  console.error("Your browser does not support IndexedDB.");
		  reject(null);
		}

		const request: IDBOpenDBRequest = window.indexedDB.open(name, version);

		request.onupgradeneeded = onupgradeneeded;

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
