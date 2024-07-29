import { Injectable } from '@nestjs/common';
import { Scheduling, SchedulingRepository } from '@barber/core';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchedulingPrismaRepository implements SchedulingRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(scheduling: Scheduling): Promise<void> {
    await this.prismaService.scheduling.create({
      data: {
        date: scheduling.date,
        customerEmail: scheduling.customerEmail,
        professional: { connect: { id: scheduling.professional.id } },
        services: {
          connect: scheduling.services.map((service) => ({ id: service.id })),
        },
      },
    });
  }

  async getByEmail(email: string): Promise<Scheduling[]> {
    return this.prismaService.scheduling.findMany({
      where: {
        customerEmail: email,
        date: {
          gte: new Date(),
        },
      },
      include: {
        services: true,
        professional: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async getByProfessionalAndDate(
    professional: string,
    date: Date,
  ): Promise<Scheduling[]> {
    const year = date.getFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();

    const startDay = new Date(year, month, day, 0, 0, 0);
    const endDay = new Date(year, month, day, 23, 59, 59);

    const output: any = await this.prismaService.scheduling.findMany({
      where: {
        professionalId: professional,
        date: {
          gte: startDay,
          lte: endDay,
        },
      },
      include: { services: true },
    });

    return output;
  }
}
