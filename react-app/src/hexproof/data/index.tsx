import { ISet } from 'hexproof/types/ISet';
import { databaseService } from 'hexproof/database/service';
import { scryfallService } from 'hexproof/scryfall/service';

interface IData {
	downloadSets: () => Promise<ISet[]>;
	getLocalSetsCount: () => Promise<number>;
}

const downloadSets = async () => {
	const sets: ISet[] = await scryfallService.downloadSets();
	await databaseService.hydrateSets(sets);
	return sets;
}

export const data: IData = {
	downloadSets,
	getLocalSetsCount: databaseService.getLocalSetsCount,
}
