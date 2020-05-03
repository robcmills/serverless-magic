// types
import { ISet } from 'hexproof/types/ISet';
import { ISetIcon } from 'hexproof/types/ISetIcon';
import { URI } from 'hexproof/types/URI';

// services
import { databaseService } from 'hexproof/database/service';
import { scryfallService } from 'hexproof/scryfall/service';

// actions
import {
	hydrateSetIconAction,
	hydrateSetIconsAction,
} from 'hexproof/redux/setIcons/actions';
import { hydrateSetsAction } from 'hexproof/redux/sets/actions';


interface IData {
	downloadSets: () => Promise<ISet[]>;
	getSetIcon: (iconSvgUri: string) => Promise<string>;
	replicateSets: () => Promise<void>;
	replicateSetIcons: () => Promise<void>;
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
			return cache[iconSvgUri];
		}
		const setIcon: ISetIcon = await databaseService.getSetIcon(iconSvgUri);
		if (!setIcon) {
			const svg: string = await scryfallService.getSetIcon(iconSvgUri);
			const newSetIcon: ISetIcon = {
				uri: iconSvgUri,
				svg,
			};
			if (!cache[iconSvgUri]) {
				cache[iconSvgUri] = svg;
				hydrateSetIconAction(newSetIcon);
				await databaseService.addSetIcon(newSetIcon);
			}
			return svg;
		}
		cache[iconSvgUri] = setIcon.svg;
		hydrateSetIconAction(setIcon);
		return setIcon.svg;
	};
	return getSetIcon;
};

const replicateSets = async () => {
	const sets: ISet[] = await databaseService.getAllSets();
	hydrateSetsAction(sets);
};

const replicateSetIcons = async () => {
	const setIcons: ISetIcon[] = await databaseService.getAllSetIcons();
	hydrateSetIconsAction(setIcons);
};

export const data: IData = {
	downloadSets,
	getSetIcon: createGetSetIcon(),
	replicateSets,
	replicateSetIcons,
};
