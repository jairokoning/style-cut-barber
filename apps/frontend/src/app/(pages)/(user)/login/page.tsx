'use client'
import { Suspense } from 'react'
import UserForm from '@/components/user/UserForm'

export default function Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UserForm />
        </Suspense>
    )
}
