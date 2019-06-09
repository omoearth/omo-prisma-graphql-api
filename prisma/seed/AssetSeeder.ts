import { prisma } from "../../src/generated/prisma.ts";
import { Asset } from "../../src/enums/assets";

export class AssetSeeder {
  async seed() {
    Object.values(Asset).forEach(
      async asset => await prisma.createAsset({ name: asset.toString() })
    );
  }
}
