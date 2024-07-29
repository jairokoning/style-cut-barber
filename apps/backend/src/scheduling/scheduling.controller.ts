import { Scheduling, CreateScheduling, GetBusySchedules } from '@barber/core';
import { SchedulingPrismaRepository } from './scheduling.prisma.repository';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('schedules')
export class SchedulingController {
  constructor(private readonly repository: SchedulingPrismaRepository) {}

  @Post()
  create(@Body() scheduling: Scheduling) {
    const usecase = new CreateScheduling(this.repository);
    return usecase.execute(scheduling);
  }

  @Get(':email')
  getByEmail(@Param('email') email: string) {
    return this.repository.getByEmail(email);
  }

  @Get('busy/:professional_id/:date')
  getBusySchedulesByProfessionalAndDate(
    @Param('professional_id') professional_id: string,
    @Param('date') date: string,
  ) {
    const usecase = new GetBusySchedules(this.repository);
    return usecase.execute(professional_id, new Date(date));
  }
}
