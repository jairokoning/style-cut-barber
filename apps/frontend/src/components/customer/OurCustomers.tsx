import { customers } from '@barber/core'
import { LayoutGrid } from '../ui/layout-grid'
import CustomerItem from './CustomerItem'
import Title from '@/components/shared/Title'

export default function OurCustomers() {
    const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2']
    const cards = customers.map((customer, i) => {
        return {
            id: customer.id,
            content: <CustomerItem name={customer.name} testimony={customer.testimony} />,
            className: classes[i],
            thumbnail: customer.imageUrl,
        }
    })

    return (
        <div className="container flex flex-col items-center gap-16">
            <Title
                tag="Clientes"
                main="Quem Manda Aqui"
                secondary="Nossos clientes são os patrões! Aqui, eles decidem, escolhem e ainda saem com estilo impecável!"
            />
            <div className="h-[900px] w-full">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    )
}
