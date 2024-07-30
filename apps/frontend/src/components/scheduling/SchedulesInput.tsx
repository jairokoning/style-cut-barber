import { useState } from 'react'
import { cn } from '@/lib/utils'
import { IconX } from '@tabler/icons-react'
import { ScheduleUtils, DateUtils } from '@barber/core'
import useScheduling from '@/data/hooks/useScheduling'

export interface SchedulesInputProps {
    date: Date
    hoursQty: number
    dateChanged(date: Date): void
}

export default function SchedulesInput(props: SchedulesInputProps) {
    const [timeHover, setTimeHover] = useState<string | null>(null)
    const { busySchedules } = useScheduling()
    const { morning, afternoon, night } = ScheduleUtils.timesOfDay()

    const selectedHour = props.date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    })

    function getPeriod(time: string | null, qty: number) {
        if (!time) return []
        const times = morning.includes(time) ? morning : afternoon.includes(time) ? afternoon : night
        const index = times.findIndex((h) => time == h)
        return times.slice(index, index + qty)
    }

    function renderSchedule(time: string) {
        const period = getPeriod(timeHover, props.hoursQty)
        const hasSchedules = period.length === props.hoursQty
        const highlightTime = hasSchedules && period.includes(time)
        const periodSelected = getPeriod(selectedHour, props.hoursQty)
        const selected =
            periodSelected.length === props.hoursQty && periodSelected.includes(time)
        const notSelectable = !hasSchedules && period.includes(time)
        const bloquedPeriod =
            period.includes(time) && period.some((h) => busySchedules.includes(h))
        const busy = busySchedules.includes(time)

        return (
            <div
                key={time}
                className={cn(
                    'flex justify-center items-center cursor-pointer h-8 border border-zinc-800 rounded select-none',
                    {
                        'bg-yellow-400': highlightTime,
                        'bg-red-500': notSelectable || bloquedPeriod,
                        'text-white bg-green-500': selected,
                        'cursor-not-allowed bg-zinc-800': busy,
                    }
                )}
                onMouseEnter={(_) => setTimeHover(time)}
                onMouseLeave={(_) => setTimeHover(null)}
                onClick={() => {
                    if (notSelectable) return
                    if (busy || bloquedPeriod) return
                    props.dateChanged(DateUtils.applySchedule(props.date, time))
                }}
            >
                <span
                    className={cn('text-sm text-zinc-400', {
                        'text-black font-semibold': highlightTime,
                        'text-white font-semibold': selected,
                        'text-zinc-400 font-semibold': busy,
                    })}
                >
                    {notSelectable || bloquedPeriod || busy ? (
                        <IconX size={18} className="text-white" />
                    ) : (
                        time
                    )}
                </span>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-zinc-400">Horários Disponíveis</span>
            <div className="flex flex-col gap-3 select-none">
                <span className="text-xs uppercase text-zinc-400">Manhã</span>
                <div className="grid grid-cols-8 gap-1">{morning.map(renderSchedule)}</div>

                <span className="text-xs uppercase text-zinc-400">Tarde</span>
                <div className="grid grid-cols-8 gap-1">{afternoon.map(renderSchedule)}</div>

                <span className="text-xs uppercase text-zinc-400">Noite</span>
                <div className="grid grid-cols-8 gap-1">{night.map(renderSchedule)}</div>
            </div>
        </div>
    )
}
