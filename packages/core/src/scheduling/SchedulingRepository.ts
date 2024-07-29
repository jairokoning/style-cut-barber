import Scheduling from './Scheduling'

export default interface SchedulingRepository {
    create(schedule: Scheduling): Promise<void>
    getByEmail(email: string): Promise<Scheduling[]>
    getByProfessionalAndDate(professional_id: string, date: Date): Promise<Scheduling[]>
}
