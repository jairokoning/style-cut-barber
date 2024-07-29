import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
  imports: [PrismaModule, SchedulingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
