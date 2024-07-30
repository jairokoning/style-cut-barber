import DayInput from './DayInput'
import SchedulesInput from './SchedulesInput'

export interface DateInputProps {
    date: Date
    slotsQty: number
    dateChanged: (date: Date) => void
}

export default function DateInput(props: DateInputProps) {
    const { date, slotsQty, dateChanged } = props

    return (
        <div className="flex flex-col gap-10">
            <DayInput date={date} dateChanged={dateChanged} />
            <SchedulesInput date={date} hoursQty={slotsQty} dateChanged={dateChanged} />
        </div>
    )
}
