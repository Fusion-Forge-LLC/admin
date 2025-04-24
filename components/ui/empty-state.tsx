import { FileIcon } from 'lucide-react'
import React from 'react'

function EmptyState({note}:{note?: string}) {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <FileIcon  size={60} />
            <span className='opacity-75'>{note}</span>
        </div>
    )
}

export default EmptyState