import { Module } from '@nestjs/common';
import { SchedulingController } from './scheduling.controller';
import { SchedulingPrismaRepository } from './scheduling.prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SchedulingController],
  providers: [SchedulingPrismaRepository],
})
export class SchedulingModule {}
