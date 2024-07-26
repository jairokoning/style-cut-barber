import { PrismaClient } from '@prisma/client';
import {
  Professional as PrismaProfessional,
  Service as PrismaService,
} from 'prisma/prisma-client';
import { services, professionals } from '@barber/core';

const prisma = new PrismaClient();

async function seed() {
  await prisma.professional.createMany({
    data: professionals as PrismaProfessional[],
  });
  await prisma.service.createMany({ data: services as PrismaService[] });
}

seed();
