import { getDatabase } from 'db/getDatabase';
import { onUpgradeNeeded } from 'db/onUpgradeNeeded';

const dbName = 'hexproof';
const dbVersion = 3;

export default getDatabase(dbName, dbVersion, onUpgradeNeeded);
