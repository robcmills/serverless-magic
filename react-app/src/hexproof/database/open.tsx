
export function open(
	name: string,
	version: number,
	onupgradeneeded: ((this: IDBOpenDBRequest, event: IDBVersionChangeEvent) => any) | null,
): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		if (!indexedDB) {
		  console.error("Your browser does not support IndexedDB.");
		  reject();
		}

		const request: IDBOpenDBRequest = indexedDB.open(name, version);

		request.onupgradeneeded = onupgradeneeded;

		request.onerror = function() {
		  console.error('Error loading database');
		  reject();
		};

		request.onsuccess = function() {
		  resolve(request.result);
		};
	});
}
