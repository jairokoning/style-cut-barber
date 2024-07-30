'use client'
import { useState } from 'react'
import { Professional, Service } from '@barber/core'
import useScheduling from '@/data/hooks/useScheduling'
import Summary from '@/components/scheduling/Summary'
import ServicesInput from '@/components/scheduling/ServicesInput'
import ProfessionalInput from '@/components/scheduling/ProfessionalInput'
import Steps from '@/components/shared/Steps'
import DateInput from '@/components/scheduling/DateInput'
import Header from '@/components/shared/Header'

export default function SchedulingPage() {
    const [allowNextStep, setAllowNextStep] = useState<boolean>(false)
    const {
        professional,
        services,
        date,
        selectProfessional,
        selectServices,
        selectDate,
        slotsQty,
    } = useScheduling()

    function professionalChanged(professional: Professional) {
        selectProfessional(professional)
        setAllowNextStep(!!professional)
    }

    function servicesChanged(services: Service[]) {
        selectServices(services)
        setAllowNextStep(services.length > 0)
    }

    function dateChanged(date: Date) {
        selectDate(date)

        const hasDate = date
        const validHour = date.getHours() >= 8 && date.getHours() <= 21
        setAllowNextStep(hasDate && validHour)
    }

    return (
        <div className="flex flex-col bg-zinc-900">
            <Header
                title="Agendamento de Serviços"
                description="Seja atendido exatamente no horário marcado."
            />
            <div
                className="
                    container flex flex-col lg:flex-row 
                    items-center lg:items-start lg:justify-around 
                    gap-10 lg:gap-0 py-10
                "
            >
                <Steps
                    allowNextStep={allowNextStep}
                    allowNextStepChanged={setAllowNextStep}
                    labels={[
                        'Selecione o professional',
                        'Informe os serviços',
                        'Escolha o horário',
                    ]}
                >
                    <ProfessionalInput
                        professional={professional}
                        professionalChanged={professionalChanged}
                    />
                    <ServicesInput services={services} servicesChanged={servicesChanged} />
                    <DateInput
                        date={date}
                        dateChanged={dateChanged}
                        slotsQty={slotsQty()}
                    />
                </Steps>
                <Summary />
            </div>
        </div>
    )
}
