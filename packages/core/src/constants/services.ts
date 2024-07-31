import Service from '../service/Service'

const services: Service[] = [
    {
        id: "5ddc048e-7d80-4122-912b-ca424249c857",
        name: 'Corte Clássico',
        description:
            'Venha receber um corte clássico, com precisão e estilo refinado. Saia pronto para qualquer ocasião com um visual que impõe respeito.',
        price: 55,
        slotsQty: 3,
        imageUrl: '/services/corte-de-cabelo.jpg',
    },
    {
        id: "3c4b02fc-a2d5-4b8c-9c61-e5e40a77af12",
        name: 'Barba Perfeita',
        description:
            'Venha dar um trato na sua barba com aparo preciso e estilo elegante. Saia com uma barba que impõe respeito e sofisticação.',
        price: 45,
        slotsQty: 2,
        imageUrl: '/services/corte-de-barba.jpg',
    },
    {
        id: "fd0e7c18-3853-46b7-adbb-ba2fa5b53529",
        name: 'Mãos e Pés Impecáveis',
        description:
            'Venha transformar suas mãos e pés com nosso serviço de Manicure & Pedicure, oferecendo um toque de classe e cuidado.',
        price: 40,
        slotsQty: 2,
        imageUrl: '/services/manicure-pedicure.jpg',
    },
    {
        id: "a5edfa49-b363-4f9f-b330-1fee90350e97",
        name: 'Combo Elegante',
        description:
            'Nosso combo "Elegante" inclui um corte de cabelo clássico, uma barba perfeita e manicure & pedicure impecáveis. Saia pronto para qualquer evento com estilo e elegância.',
        price: 95,
        slotsQty: 4,
        imageUrl: '/services/combo.jpg',
    },
    {
        id: "9d72c130-f6dc-400d-9ff2-e475b7862403",
        name: 'Pequeno Cavalheiro',
        description:
            'Transforme seu pequeno aventureiro em um mini cavalheiro, com um corte cheio de atitude e estilo. Cabelo afiado e charmoso.',
        price: 60,
        slotsQty: 2,
        imageUrl: '/services/corte-infantil.jpg',
    },
    {
        id: "cb50fb11-5fe2-4681-9a8a-50e31a350351",
        name: 'Noivo Clássico',
        description:
            'Prepare-se para o grande dia com um tratamento digno de um verdadeiro cavalheiro. Corte de cabelo refinado, barba perfeita e manicure, tudo enquanto você relaxa em um ambiente clássico e acolhedor.',
        price: 189,
        slotsQty: 3,
        imageUrl: '/services/dia-de-noivo.jpg',
    },
]

export default services
