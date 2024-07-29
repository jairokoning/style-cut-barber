import { Professional } from '../professional'
import { Service } from '../service'

export default interface Scheduling {
    id: string
    customerEmail: string
    date: Date
    professional: Professional
    services: Service[]
}
