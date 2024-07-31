'use client'

import OurCustomers from '@/components/customer/OurCustomers'
import SloganTitle from '@/components/landing/SloganTitle'
import OurProfessionals from '@/components/professional/OurProfessionals'
import OurServices from '@/components/service/OurServices'
import ContainerBackground from '@/components/shared/ContainerBackground'

export default function Landing() {
    return (
        <div>
            <SloganTitle />
            <ContainerBackground image="/banners/servicos.webp">
                <OurServices />
            </ContainerBackground>
            <ContainerBackground image="/banners/profissionais.webp">
                <OurProfessionals />
            </ContainerBackground>
            <ContainerBackground image="/banners/clientes.webp">
                <OurCustomers />
            </ContainerBackground>
        </div>
    )
}
