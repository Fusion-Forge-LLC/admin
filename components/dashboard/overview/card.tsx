import { cn } from '@/lib/utils'
import { EllipsisVertical, Loader } from 'lucide-react'
import React, { ReactNode } from 'react'

function Card({
    icon,
    title,
    className,
    children,
    isLoading
}:{
    icon: ReactNode,
    title: string,
    className: string,
    children: ReactNode,
    isLoading: boolean
}) {
    return (
        <div className={cn('rounded-[12px] p-5 space-y-3', className)}>
            <header className='flex justify-between items-center'>
                <div className="h-8 w-8 rounded-full bg-[#252424] grid place-content-center">
                    {icon}
                </div>

                <EllipsisVertical color='#252424' />
            </header>
            <h4 className='text-[#707070] text-sm'>{title}</h4>
            {isLoading ? (
                <div className='grid place-content-center py-5'>
                    <Loader className='h-5 w-5 animate-spin' /> 
                </div> ):(
                <div>
                    {children}
                </div>
            )}
        </div>
    )
}

export default Card