import { createContext, useCallback, useEffect, useState } from 'react'
import { Professional, Service } from '@barber/core'
import { DateUtils } from '@barber/core'
import useUser from '../hooks/useUser'
import useAPI from '../hooks/useAPI'

interface SchedulingContextProps {
    professional: Professional | null
    services: Service[]
    date: Date
    busySchedules: string[]
    totalDuration(): string
    totalPrice(): number
    slotsQty(): number
    selectProfessional(professional: Professional): void
    selectServices(services: Service[]): void
    selectDate(date: Date): void
    schedule(): Promise<void>
}

export const SchedulingContext = createContext({} as SchedulingContextProps)

export function SchedulingProvider({ children }: { children: React.ReactNode }) {
    const [professional, setProfessional] = useState<Professional | null>(null)
    const [services, setServices] = useState<Service[]>([])
    const [date, setData] = useState<Date>(DateUtils.today())

    const { user } = useUser()
    const [busySchedules, setBusySchedules] = useState<string[]>([])
    const { httpGet, httpPost } = useAPI()

    function selectProfessional(professional: Professional) {
        setProfessional(professional)
    }

    function selectServices(services: Service[]) {
        setServices(services)
    }

    function totalDuration() {
        const duration = services.reduce((acc, current) => {
            return (acc += current.slotsQty * 15)
        }, 0)

        return `${Math.trunc(duration / 60)}h ${duration % 60}m`
    }

    function totalPrice() {
        return services.reduce((acc, current) => {
            return (acc += current.price)
        }, 0)
    }

    const selectDate = useCallback(function (hour: Date) {
        setData(hour)
    }, [])

    function slotsQty() {
        const totalSlots = services.reduce((acc, service) => {
            return (acc += service.slotsQty)
        }, 0)

        return totalSlots
    }

    async function schedule() {
        if (!user?.email) return

        await httpPost('schedules', {
            customerEmail: user.email,
            date: date!,
            professional: professional!,
            services: services,
        })

        clear()
    }

    function clear() {
        setData(DateUtils.today())
        setBusySchedules([])
        setProfessional(null)
        setServices([])
    }

    const getBusySchedules = useCallback(
        async function (date: Date, professional: Professional): Promise<string[]> {
            try {
                if (!date || !professional) return []
                const dtString = date.toISOString().slice(0, 10)
                const busySchedules = await httpGet(
                    `schedules/busy/${professional!.id}/${dtString}`
                )
                return busySchedules ?? []
            } catch (e) {
                return []
            }
        },
        [httpGet]
    )

    useEffect(() => {
        if (!date || !professional) return
        getBusySchedules(date, professional).then(setBusySchedules)
    }, [date, professional, getBusySchedules])

    return (
        <SchedulingContext.Provider
            value={{
                date,
                professional,
                services,
                busySchedules,
                totalDuration,
                totalPrice,
                selectDate,
                selectProfessional,
                slotsQty,
                selectServices,
                schedule,
           }}
        >
            {children}
        </SchedulingContext.Provider>
    )
}
