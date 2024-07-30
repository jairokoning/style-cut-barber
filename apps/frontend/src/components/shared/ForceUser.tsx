'use client'
import { usePathname, useRouter } from 'next/navigation'
import useUser from '@/data/hooks/useUser'

export default function ForceUser(props: any) {
    const { loading, user } = useUser()
    const path = usePathname()
    const router = useRouter()

    function redirectTo(url: string) {
        router.push(url)
        return <div className="flex justify-center items-center h-screen">Direcionando...</div>
    }

    if (!user?.email && loading) return <div>Carregando...</div>
    if (!user?.email) return redirectTo(`/login?next=${path}`)

    return props.children
}
