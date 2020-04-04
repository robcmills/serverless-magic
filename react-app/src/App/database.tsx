import { getDatabase } from 'db/getDatabase';

const dbName = 'hexproof';
const dbVersion = 3;

export default getDatabase(dbName, dbVersion);
