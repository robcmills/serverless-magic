import { databaseService } from 'hexproof/database/service';
import { hydrateSetsAction } from 'hexproof/redux/sets/actions';
import { ISet } from 'hexproof/types/ISet';
import { ISetIcon } from 'hexproof/types/ISetIcon';
import { URI } from 'hexproof/types/URI';
import { scryfallService } from 'hexproof/scryfall/service';

interface IData {
	downloadSets: () => Promise<ISet[]>;
	getSetIcon: (iconSvgUri: string) => Promise<string>;
	replicateSets: () => Promise<void>;
};

const downloadSets = async () => {
	const sets: ISet[] = await scryfallService.downloadSets();
	await databaseService.clearSets();
	await databaseService.hydrateSets(sets);
	return sets;
};

type IGetSetIconsCache = Record<URI, string>;

const createGetSetIcon = () => {
	const cache: IGetSetIconsCache = {};
	const getSetIcon = async (iconSvgUri: string) => {
		if (cache[iconSvgUri]) {
			console.log('cache hit');
			return cache[iconSvgUri];
		}
		console.log('database.getSetIcon', iconSvgUri);
		const setIcon: ISetIcon = await databaseService.getSetIcon(iconSvgUri);
		if (!setIcon) {
			console.log('scryfallService.getSetIcon', iconSvgUri);
			const svg: string = await scryfallService.getSetIcon(iconSvgUri);
			const newSetIcon: ISetIcon = {
				uri: iconSvgUri,
				svg,
			};
			if (!cache[iconSvgUri]) {
				cache[iconSvgUri] = svg;
				console.log('databaseService.addSetIcon', iconSvgUri);
				await databaseService.addSetIcon(newSetIcon);
			}
			return svg;
		}
		cache[iconSvgUri] = setIcon.svg;
		return setIcon.svg;
	};
	return getSetIcon;
};

const replicateSets = async () => {
	const sets: ISet[] = await databaseService.getAllSets();
	hydrateSetsAction(sets);
};

export const data: IData = {
	downloadSets,
	getSetIcon: createGetSetIcon(),
	replicateSets,
};
