export default class DateUtils {
    static today() {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return today
    }

    static applySchedule(date: Date, time: string): Date {
        const newDate = new Date(date)
        const parts = time.split(':')
        newDate.setHours(parseInt(parts[0]!), parseInt(parts[1]!))
        return newDate
    }
}
