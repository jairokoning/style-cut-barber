import { SLOT_TIME } from '../constants'
import SchedulingRepository from './SchedulingRepository'

export default class GetBusySchedules {
    constructor(private readonly repo: SchedulingRepository) {}

    async execute(professionalId: string, date: Date): Promise<string[]> {
        const schedules = await this.repo.getByProfessionalAndDate(professionalId, date)
        const data = schedules
            .map((schedule) => {
                return {
                    date: schedule.date,
                    slots: schedule.services.reduce((total, s) => total + s.slotsQty, 0),
                }
            })
            .reduce((busySchedules: Date[], data: any) => {
                const appointment = data.date
                const slots = data.slots
                const appointments = Array.from({ length: slots }, (_, i) =>
                    this.sumMinutes(appointment, i * SLOT_TIME)
                )
                return [...busySchedules, ...appointments]
            }, [])
            .map((d) => d.toTimeString().slice(0, 5))

        return data // [ '10:00', '10:15', '10:30', '10:45', '14:15' ]
    }

    private sumMinutes(date: Date, minutes: number): Date {
        return new Date(date.getTime() + minutes * 60000)
    }
}
