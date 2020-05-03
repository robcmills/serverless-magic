import { database } from 'hexproof/database';
import { ISet } from 'hexproof/types/ISet';
import { ISetIcon } from 'hexproof/types/ISetIcon';

interface IDatabaseService {
  addSetIcon: (setIcon: ISetIcon) => Promise<void>;
  clearSets: () => Promise<void>;
  getAllSets: () => Promise<ISet[]>;
  getAllSetIcons: () => Promise<ISetIcon[]>;
  getSetIcon: (iconSvgUri: string) => Promise<ISetIcon>;
  hydrateSets: (sets: ISet[]) => Promise<void>;
  transaction: (args: ITransaction) => Promise<any>;
}

interface ITransaction {
  getRequest: (objectStore: IDBObjectStore) => IDBRequest;
  storeName: string;
  mode?: 'readonly' | 'readwrite';
  transactionName: string;
}

export const databaseService: IDatabaseService = {
  addSetIcon: async (setIcon: ISetIcon): Promise<void> => {
    const db: IDBDatabase | null = await database.getIndexedDB();
    if (!db) {
      throw new Error('Could not open database');
    }
    const transaction: IDBTransaction = db.transaction('setIcons', 'readwrite');
    const objectStore: IDBObjectStore = transaction.objectStore('setIcons');

    return await new Promise((resolve, reject) => {
      const request: IDBRequest = objectStore.add(setIcon);
      request.onerror = function(event) {
        console.error('addSetIcon transaction error', request, event);
        reject(new Error('Could not complete `addSetIcon` transaction'));
      };
      request.onsuccess = function(event) {
        resolve();
      };
    });
  },
  clearSets: async function() {
    return this.transaction({
      getRequest: (objectStore: IDBObjectStore) => objectStore.clear(),
      mode: 'readwrite',
      storeName: 'sets',
      transactionName: 'clearSets',
    });
  },
  getAllSets: async function() {
    return this.transaction({
      getRequest: (objectStore: IDBObjectStore) => objectStore.getAll(),
      storeName: 'sets',
      transactionName: 'getAllSets',
    });
  },
  getAllSetIcons: async function() {
    return this.transaction({
      getRequest: (objectStore: IDBObjectStore) => objectStore.getAll(),
      storeName: 'setIcons',
      transactionName: 'getAllSetIcons',
    });
  },
  getSetIcon: async function(iconSvgUri: string): Promise<ISetIcon> {
    return this.transaction({
      getRequest: (objectStore: IDBObjectStore) => objectStore.get(iconSvgUri),
      storeName: 'setIcons',
      transactionName: 'getSetIcon',
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
  transaction: async function({
    getRequest,
    storeName,
    mode,
    transactionName,
  }: ITransaction): Promise<any> {
    const db: IDBDatabase | null = await database.getIndexedDB();
    if (!db) {
      throw new Error('Could not open database');
    }
    const transaction: IDBTransaction = db.transaction(storeName, mode);
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);

    return await new Promise((resolve, reject) => {
      const request: IDBRequest = getRequest(objectStore);
      request.onerror = function(event) {
        console.error('transaction error', request, event);
        reject(new Error(`Could not complete '${transactionName}' transaction`));
      };
      request.onsuccess = function(event) {
        resolve(request.result);
      };
    });
  },
};

