import Header from '@/components/dashboard/layout/header'
import Sidebar from '@/components/dashboard/layout/sidebar'
import Loader from '@/components/ui/loader'
import React, { ReactNode, Suspense } from 'react'

function DashboardLayout({children}:{children: ReactNode}) {
    return (
        <Suspense fallback={<Loader />}>
            <div className='h-screen flex'>
                <Sidebar />
                <main className='flex-1 flex flex-col overflow-y-scroll relative'>
                    <Header />
                    <div className="flex-1">
                        {children}
                    </div>
                </main>
            </div>
        </Suspense>
    )
}

export default DashboardLayout