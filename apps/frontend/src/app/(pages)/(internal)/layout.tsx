'use client'
import { SchedulingProvider } from '@/data/contexts/SchedulingContext'
import ForceUser from '@/components/shared/ForceUser'
import Page from '@/components/shared/Page'

export default function Layout(props: any) {
    return (
        <ForceUser>
            <SchedulingProvider>
                <Page>{props.children}</Page>
            </SchedulingProvider>
        </ForceUser>
    )
}
