import { databaseService } from 'hexproof/database/service';
import { hydrateSetsAction } from 'hexproof/redux/sets/actions';
import { ISet } from 'hexproof/types/ISet';
import { scryfallService } from 'hexproof/scryfall/service';

interface IData {
	downloadSets: () => Promise<ISet[]>;
	replicateSets: () => Promise<void>;
}

const downloadSets = async () => {
	const sets: ISet[] = await scryfallService.downloadSets();
	await databaseService.clearSets();
	await databaseService.hydrateSets(sets);
	return sets;
}

const replicateSets = async () => {
	const sets: ISet[] = await databaseService.getAllSets();
	hydrateSetsAction(sets);
}

export const data: IData = {
	downloadSets,
	replicateSets,
}
