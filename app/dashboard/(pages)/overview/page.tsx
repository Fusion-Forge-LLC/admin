"use client"

import { useFetchOverview } from '@/api/dashboard/overview';
import { Calender } from '@/components/dashboard/calender/calender';
import Card from '@/components/dashboard/overview/card';
import Property from '@/components/dashboard/overview/property';
import PropertyLists from '@/components/dashboard/overview/property-lists';
import Statistics from '@/components/dashboard/overview/statistics';
import { Icons } from '@/components/icons/icons';
import { useUser } from '@/context/user';
import { getGreeting } from '@/lib/utils';
import React from 'react'

function Page() {
    const { User } = useUser();
    const {data, isLoading} = useFetchOverview();
    return (
        <div className='p-5 border'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='capitalize text-[#252424] text-2xl font-bold'>
                        Hello {User?.fullname.split(" ")[0]}
                    </h4>
                    <span>{getGreeting()}</span>
                </div>

                <div className='flex-1'>
                    
                    <Calender />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 py-4'>
                <Card
                    icon={<Icons.users stroke='#FFF' />}
                    title='Total Customers'
                    className='bg-[#E0E9FF]'
                    isLoading={isLoading}
                >
                    <ul className='grid grid-cols-3'>
                        {data && Object.entries(data?.data?.vendors).map(item => {
                            return(
                                <li key={item[0]} className='flex flex-col justify-center first:pr-1 px-1 first:px-0 border-r border-r-[#B5BAC6] last:border-r-0'>
                                    <h4 className='text-[#434343] capitalize'>{item[0]}</h4>                            
                                    <p className='font-bold text-[22px]'>{item[1].toLocaleString()}</p>
                                </li>
                            )
                        })}
                    </ul>
                </Card>
                <Card
                    icon={<Icons.building stroke='#FFF' />}
                    title='Total Properties'
                    className='bg-[#E4FFE0]/[72%]'
                    isLoading={isLoading}
                >
                    <div>
                        <p className='font-bold text-[22px] mb-2'>{data?.data.totalProperties.toLocaleString()}</p>
                        <p className='flex items-center gap-2 text-[11px]'>
                            <Icons.claretUp />
                            <span className='text-[#21C55D]'>+3.05%</span>
                            <span className='text-[#AAAAAA]'>vs last month</span>
                        </p>
                    </div>
                </Card>
                <Card
                    icon={<Icons.receiptAdd stroke='#FFF' />}
                    title='Properties Rented'
                    className='bg-[#FFE0E0]'
                    isLoading={isLoading}
                >
                    <div>
                        <p className='font-bold text-[22px] mb-2'>{data?.data.propertiesRented.toLocaleString()}</p>
                        <p className='flex items-center gap-2 text-[11px]'>
                            <Icons.claretUp />
                            <span className='text-[#EF4444]'>-3.05%</span>
                            <span className='text-[#AAAAAA]'>vs last month</span>
                        </p>
                    </div>
                </Card>
                <Card
                    icon={<Icons.building2 stroke='#FFF' />}
                    title='Available Properties'
                    className='bg-[#FBE0FF]'
                    isLoading={isLoading}
                >
                    <div>
                        <p className='font-bold text-[22px] mb-2'>{data?.data.activeProperties.toLocaleString()}</p>
                        <p className='flex items-center gap-2 text-[11px]'>
                            <Icons.claretUp />
                            <span className='text-[#EF4444]'>-8.09%</span>
                            <span className='text-[#AAAAAA]'>vs last month</span>
                        </p>
                    </div>
                </Card>
            </div>

            <section className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <Statistics />
                </div>
                <ul className='col-span-3 flex flex-col justify-between'>
                    <li className='bg-[#F6F6F6] rounded-[12px] px-6 py-7 space-y-3'>
                        <h4 className='text-sm text-[#696969]'>Total Users</h4>
                        <p className='text-2xl font-bold text-[#252424]'>{data?.data.users.toLocaleString()}</p>
                    </li>
                    <li className='bg-[#F6F6F6] rounded-[12px] px-6 py-7 space-y-3'>
                        <h4 className='text-sm text-[#696969]'>Active Users</h4>
                        <p className='text-2xl font-bold text-[#252424]'>{data?.data.users.toLocaleString()}</p>
                    </li>
                    <li className='bg-[#F6F6F6] rounded-[12px] px-6 py-7 space-y-3'>
                        <h4 className='text-sm text-[#696969]'>Deactivated Users</h4>
                        <p className='text-2xl font-bold text-[#252424]'>{data?.data.users.toLocaleString()}</p>
                    </li>
                </ul>
                <div className='col-span-3'>
                    <Property />
                </div>
                
            </section>

            <section className='py-5'>
                <PropertyLists />
            </section>
        </div>
    )
}

export default Page