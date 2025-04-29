"use client"

import { navItems } from '@/constant/nav-items'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className='h-full bg-[#205BF3] w-54 text-white hidden lg:block'>
            <header className='px-6 py-10'>
                <span className='font-bold text-2xl'>SpaceFinda</span>
            </header>
            <ul>
                {navItems.map((item, index) => {
                    const isActive = pathname === item.link;
                    return(
                        <li key={index} className={cn( isActive && "bg-[#DFE8FF] border-l-5 border-l-[#08246C]")}>
                            <Link href={item.link} className='flex items-center gap-4 px-6 py-4 hover:bg-[#DFE8FF]/50'>
                                <item.Icon stroke={isActive ? "#205BF3" : "#FFFFFF"} />
                                <span className={cn(isActive && "text-[#205BF3]")}>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar