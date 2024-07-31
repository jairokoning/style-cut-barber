import Image from 'next/image'
import Link from 'next/link'

export default function SuccessfullyScheduled() {
    return (
        <>
            <Image src="/agendamento.png" width={400} height={400} alt="Agendado com Sucesso" />
            <h2 className="text-3xl font-black">Aee 👏👏👏! Tudo marcado!</h2>
            <h3 className="text-zinc-400 text-lg font-thin w-96 text-center">
                Tudo certo por aqui! Seu horário está garantido e agora é só aguardar para brilhar!
            </h3>
            <Link href="/" className="button mt-7 bg-green-600">
                Voltar para o início
            </Link>
        </>
    )
}
