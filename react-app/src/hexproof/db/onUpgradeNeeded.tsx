// import { ISet } from 'hexproof/types/ISet';

export function onUpgradeNeeded(this: IDBOpenDBRequest, event: IDBVersionChangeEvent): any {
  console.log('this', this);
  console.log('event', event);
  if (!this || !this.result) {
    return;
  }
  const db: IDBDatabase = this.result;

  const objectStore: IDBObjectStore = db.createObjectStore('sets', { keyPath: 'id' });
  objectStore.createIndex('code', 'code', { unique: true });
  objectStore.createIndex('name', 'name', { unique: true });
}