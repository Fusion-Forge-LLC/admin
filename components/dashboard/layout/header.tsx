"use client"

import { Icons } from '@/components/icons/icons'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useUser } from '@/context/user';

function Header() {
    const { User } = useUser();
    const [openMenu, setOpenMenu] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    return (
        <header className='bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.2)] sticky top-0 left-0 z-50 p-5 flex items-center gap-5'>
            <div className='relative w-80 mr-auto'>
                <Search className='absolute top-1/2 -translate-y-1/2 left-2' color='#D7D7D7' />
                <Input
                    className='w-full h-12 pl-10 border-[#D7D7D7] bg-[#F9F9F9] placeholder:text-[#D7D7D7]'
                    placeholder='Search for properties here...'
                />
            </div>
            <button className='relative p-1'>
                <span className='absolute block h-2 w-2 rounded-full bg-[#DD5C5C] right-0 top-0'/>
                <Icons.bell stroke='#292D32' height={24} width={24}/>
            </button>
            <button className='relative p-1.5'>
                <span className='absolute block h-2 w-2 rounded-full bg-[#DD5C5C] right-0 top-0'/>
                <Icons.message stroke='#292D32' height={24} width={24} />
            </button>

            <Popover open={openMenu} onOpenChange={setOpenMenu}>
                <PopoverTrigger className="">
                    <div className='flex items-center gap-2'>
                        <div className='h-10 w-10 rounded-full overflow-hidden relative'>
                            <Image
                                src={"/defaultprofilepic.jpg"}
                                alt='profile image'
                                fill
                                className='object-cover object-top'
                            />
                        </div>
                        <div className='flex flex-col justify-center text-left'>
                            <h5 className='text-[#434343] text-sm font-medium capitalize'>{User?.fullname}</h5>
                            <span className='text-[#707070] text-xs capitalize'>{User?.role} Admin</span>
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="max-md:w-72 md:w-[18.75rem] bg-white p-0"
                    align="start"
                >
                    <div className="p-5 flex items-center gap-3 bg-[#FAF6FE] mb-3">
                        <div className='h-10 w-10 rounded-full overflow-hidden relative'>
                            <Image
                                src={"/defaultprofilepic.jpg"}
                                alt='profile image'
                                fill
                                className='object-cover object-top'
                            />
                        </div>

                    <div className="space-y-0.5 capitalize">
                        <p className="text-[#0B0B0B] font-medium">
                            {User?.fullname}
                        </p>
                        <p className="text-xs text-text-sec md:text-sm">
                            {User?.role}
                        </p>
                    </div>
                    </div>

                    <div className="space-y-1 *:cursor-pointer *:flex *:items-center *:gap-2 *:px-5 *:py-3 ">
                    <p
                        className="hover:bg-neutral-100"
                        onClick={() => setOpenChangePassword(true)}
                    >
                        <Icons.password />
                        Change Password
                    </p>
                    <p
                        className="text-error hover:bg-neutral-100"
                    >
                        <Icons.logout />
                        Logout
                    </p>
                    </div>
                </PopoverContent>
            </Popover>
        </header>
    )
}

export default Header