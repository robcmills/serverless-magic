import { databaseService } from 'hexproof/database/service';

interface IData {
	getLocalSetsCount: () => Promise<number>;
}

export const data: IData = {
	getLocalSetsCount: databaseService.getLocalSetsCount,
}
