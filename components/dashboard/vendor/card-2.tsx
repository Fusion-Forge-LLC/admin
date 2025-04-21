import Loader from '@/components/ui/loader'
import Link from 'next/link'
import React, { ReactNode } from 'react'

function Card2({
    title, 
    link, 
    isLoading, 
    children
}:{
    title: string, 
    link:string, 
    isLoading: boolean, 
    children: ReactNode
}) {
    return (
        <div>
            <div className='flex items-center justify-between py-4'>
                <h4 className='text-[#1E1E1E] font-medium'>{title}</h4> 
                <Link href={link} className='hover:underline text-sm text-gray-400'>
                    See all
                </Link>
            </div>
            <div className='border border-[#F1F1F1] overflow-hidden rounded-[12px]'>
                {isLoading ?
                    <div className='py-5 grid place-content-center'>
                        <Loader  />
                    </div> : <div className=''>{children}</div>}
            </div>
        </div>
    )
}

export default Card2