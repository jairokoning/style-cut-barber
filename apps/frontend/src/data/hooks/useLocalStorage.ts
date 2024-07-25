'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((key: string) => {
        const localValue = window?.localStorage?.getItem(key)
        return localValue ? JSON.parse(localValue) : null
    }, [])

    const set = useCallback((key: string, valor: any) => {
        window?.localStorage?.setItem(key, JSON.stringify(valor))
    }, [])

    return { get, set }
}
