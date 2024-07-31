'use client'
import { Service } from '@barber/core'
import { useRouter } from 'next/navigation'
import ServiceItem from './ServiceItem'
import Title from '../shared/Title'
import useServices from '@/data/hooks/useServices'

export default function OurServices() {
    const router = useRouter()
    const { services } = useServices()

    function startScheduling() {
        router.push('/scheduling')
    }

    return (
        <div className="flex flex-col gap-16">
            <Title
                tag="Serviços"
                main="Do Classico ao Moderno"
                secondary="Cabelo refinado, barba bem feita e mãos habilidosas, tudo ao som de boa música!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {services.map((service: Service) => (
                    <ServiceItem key={service.id} service={service} onClick={startScheduling} />
                ))}
            </div>
        </div>
    )
}
