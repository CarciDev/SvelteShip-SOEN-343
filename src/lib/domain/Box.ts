import type { PrismaClient } from "@prisma/client";

export class Box {
  id?: number;
  heightCm: number;
  widthCm: number;
  depthCm: number;
  weightG: number;

  constructor(params: {
    heightCm: number;
    widthCm: number;
    depthCm: number;
    weightG: number;
  }) {
    this.heightCm = params.heightCm;
    this.widthCm = params.widthCm;
    this.depthCm = params.depthCm;
    this.weightG = params.weightG;
  }

  persist(prisma: PrismaClient) {
    prisma.box.upsert({
      where: { id: this.id },
      update: {
        heightCm: this.heightCm,
        widthCm: this.widthCm,
        depthCm: this.depthCm,
        weightG: this.weightG,
      },
      create: {
        heightCm: this.heightCm,
        widthCm: this.widthCm,
        depthCm: this.depthCm,
        weightG: this.weightG,
      },
    });
  }
}
