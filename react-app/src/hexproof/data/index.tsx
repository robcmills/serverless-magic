// types
import { ISet } from 'hexproof/types/ISet';
import { ISetIcon } from 'hexproof/types/ISetIcon';
import { URI } from 'hexproof/types/URI';

// util
import { indexBy } from 'hexproof/util/indexBy';

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
  downloadSetIcons: () => Promise<void>;
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

const createdGetSetIcon = createGetSetIcon();

const downloadSetIcons = async () => {
  const sets: ISet[] = await databaseService.getAllSets();
  const setIcons: ISetIcon[] = await databaseService.getAllSetIcons();
  const setIconsByUri: Record<URI, ISetIcon> = indexBy(setIcons, 'uri');
  const promises: Promise<string>[] = [];
  sets.forEach((set: ISet) => {
    if (!setIconsByUri[set.icon_svg_uri]) {
      promises.push(createdGetSetIcon(set.icon_svg_uri));
    }
  });
  await Promise.all(promises);
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
  downloadSetIcons,
  getSetIcon: createdGetSetIcon,
  replicateSets,
  replicateSetIcons,
};
