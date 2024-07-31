'use client'
import { Professional } from '@barber/core'
import ProfessionalItem from '@/components/professional/ProfessionalItem'
import Title from '@/components/shared/Title'
import useProfessionals from '@/data/hooks/useProfessionals'

export default function OurProfessionals() {
    const { professionals } = useProfessionals()

    return (
        <div className="container flex flex-col items-center gap-y-16">
            <Title
                tag="Time"
                main="Nossos Mestres"
                secondary="Só os mais qualificados estão aqui! Temos o orgulho de ter o time mais experiente do Brasil!"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {professionals.map((profissional: Professional) => (
                    <ProfessionalItem key={profissional.id} profissional={profissional} />
                ))}
            </div>
        </div>
    )
}
