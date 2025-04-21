import { Icons } from '@/components/icons/icons'
import Loader from '@/components/ui/loader';
import React, { ReactNode } from 'react'

function Card({title, isLoading, children}: {title: string; children: ReactNode; isLoading: boolean}) {
    return (
        <div>
            <header className='px-6 py-4 flex items-center justify-between border border-[#F1F1F1] bg-[#F9F9F9] rounded-t-[12px]'>
                <h4 className='text-[#1E1E1E] font-medium'>{title}</h4>
                <button className='bg-white border border-[#F1F1F1] rounded-lg h-7 w-7 grid place-content-center'>
                    <Icons.info />
                </button>
            </header>
            <div className="px-6 py-4 border border-[#F1F1F1] bg-white rounded-b-[12px]">
                {isLoading ? <Loader/> : children}
            </div>
        </div>
    )
}

export default Card
