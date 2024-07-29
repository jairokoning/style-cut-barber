import Scheduling from "./Scheduling";
import SchedulingRepository from "./SchedulingRepository";

export default class CreateScheduling{
  constructor(private readonly repository: SchedulingRepository) {}

  async execute(scheduling: Scheduling): Promise<void> {
    await this.repository.create(scheduling)
  }
}