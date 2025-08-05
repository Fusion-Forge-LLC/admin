import React, { ReactNode } from 'react'

function Card({
    title, 
    icon, 
    main, 
    text
}:{
    title: string; 
    icon: ReactNode,
    main: string,
    text: ReactNode
}) {
    return (
        <div className='bg-[#F6F6F6] p-4 border border-[#F1F1F1] rounded-xl space-y-2'>
            <div className='flex items-center justify-between'>
                <h4 className='text-[#434343] font-medium'>{title}</h4>
                <div className='h-9 w-9 rounded-full grid place-content-center bg-[#252424]'>
                    {icon}
                </div>
            </div>

            <p className='text-[22px] font-bold'>{main}</p>  

            <span>{text}</span>
        </div>
    )
}

export default Card