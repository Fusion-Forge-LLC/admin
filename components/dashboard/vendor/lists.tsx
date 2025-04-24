import { cn } from '@/lib/utils';
import React, { FC, ReactNode } from 'react'

function ListItem({title, body, Icon}:{title: string; body: ReactNode; Icon?: FC}) {
    return (
        <li className='space-y-1'>
            <div className='flex items-center gap-2'>
                {Icon && <Icon />}
                <span className='text-[#707070] text-sm capitalize'>{title}</span>
            </div>
            <div className={cn("text-[#434343] font-medium", Icon && "pl-7")}>{body}</div>
        </li>
    )
}


export default ListItem