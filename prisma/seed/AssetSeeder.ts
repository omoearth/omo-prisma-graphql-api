import { prisma } from '../../src/generated/prisma-client';
import { Asset } from '../../src/enums/Asset';

export class AssetSeeder {
  async seed() {
    Object.values(Asset).forEach(async asset => await prisma.createAsset({ name: asset.toString() }));
  }
}
