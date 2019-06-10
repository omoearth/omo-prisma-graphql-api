import { prisma } from '../../src/generated/prisma-client';
import { AssetType } from '../../src/definitions/Enums';

export class AssetSeeder {
	async seed() {
		Object.values(AssetType).forEach(async asset => await prisma.createAsset({ name: asset.toString() }));
	}
}
