import Header from '@/components/dashboard/layout/header'
import Sidebar from '@/components/dashboard/layout/sidebar'
import React, { ReactNode } from 'react'

function DashboardLayout({children}:{children: ReactNode}) {
    return (
        <div className='h-screen flex'>
            <Sidebar />
            <main className='flex-1 flex flex-col'>
                <Header />
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout