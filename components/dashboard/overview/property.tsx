"use client"

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PropertyPieChart } from './charts/piehcart'
import { useFetchPropertyStat } from '@/api/dashboard/property-stats'
import Loader from '@/components/ui/loader'

function Property() {
    const { data, isLoading } = useFetchPropertyStat();
    return (
        <div className='py-4 space-y-5 bg-[#F2F4F5] border border-[#DCE4F9] p-5 rounded-[12px] h-full flex flex-col'>
            <header className='flex justify-between items-center'>
                <span className='text-[#434343] text-sm font-medium'>Sales Statistics</span>
                <div>
                    <Select defaultValue='month'>
                        <SelectTrigger className="bg-white">
                            <SelectValue placeholder="timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="week">Week</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </header>

            <div className="flex-1 grid place-content-center">
                {isLoading ? <Loader /> : <PropertyPieChart data={data?.data}/>}
            </div>

            <ul className='space-y-3 text-[#434343] text-sm font-medium'>
                {data?.data.map((item, index) => {
                    return(
                        <li key={index} className='flex items-center justify-between'>
                            <span className='capitalize'>{item.type}</span>
                            <span>{item.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Property