export default class ScheduleUtils {
    private static slotMinutes = [0, 15, 30, 45]

    static timesOfDay() {
        return {
            morning: this.generateSchedules([8, 9, 10, 11]),
            afternoon: this.generateSchedules([14, 15, 16, 17]),
            night: this.generateSchedules([18, 19, 20, 21]),
        }
    }

    private static generateSchedules(hours: number[]) {
        return hours.reduce((schedules, hour) => {
            const allSchedules = this.slotMinutes.map((minute) => {
                return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
            })
            return schedules.concat(allSchedules)
        }, [] as string[])
    }
}
