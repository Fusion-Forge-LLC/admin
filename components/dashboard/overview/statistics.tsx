import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Icons } from '@/components/icons/icons'
import { RevenueBarChart } from './charts/barcharts'
import { useFetchChart } from '@/api/dashboard/chart';

function Statistics() {
    const{ data } = useFetchChart();
    return (
        <div className=' py-4 space-y-5 bg-[#F2F4F5] border border-[#DCE4F9] p-5 rounded-[12px]'>
            <header className='flex justify-between items-center'>
                <span className='text-[#434343] text-2xl font-medium'>Sales Statistics</span>
                <div>
                    <Select defaultValue='month'>
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="week">Last week</SelectItem>
                            <SelectItem value="month">Last Month</SelectItem>
                            <SelectItem value="year">Last Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </header>

            <ul className='grid grid-cols-3 gap-4'>
                <li className='flex items-center gap-2'>
                    <span className='h-8 w-8 rounded-full shrink-0 bg-[#DCE4F9] grid place-content-center'>
                        {<Icons.receive />}
                    </span>
                    <div>
                        <h5 className='text-sm text-[#707070]'>Total Revenue</h5>
                        <p className='mb-1 text-[#434343] flex items-center gap-2'>
                            ₦{data?.data.reduce((prevValue, currentValue) => currentValue.booking + prevValue, 0).toLocaleString()} 
                            <span className='text-[#21C55D] text-xs flex items-center gap-0.5'>
                                5.08 <Icons.arrowUp />
                            </span>
                        </p>
                    </div>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='h-8 w-8 rounded-full shrink-0 bg-[#E4FFE0] grid place-content-center'>
                        {<Icons.moneyAdd />}
                    </span>
                    <div>
                        <h5 className='text-sm text-[#707070]'>Total Payout</h5>
                        <p className='mb-1 text-[#434343] flex items-center gap-2'>
                            ₦{data?.data.reduce((prevValue, currentValue) => currentValue.payout + prevValue, 0).toLocaleString()} 
                            <span className='text-[#21C55D] text-xs flex items-center gap-0.5'>
                                5.08 <Icons.arrowUp />
                            </span>
                        </p>
                    </div>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='h-8 w-8 rounded-full shrink-0 bg-[#FFE0E0] grid place-content-center'>
                        {<Icons.moneyMinus />}
                    </span>
                    <div>
                        <h5 className='text-sm text-[#707070]'>Balance</h5>
                        <p className='mb-1 text-[#434343] flex items-center gap-2'>
                            ₦80,000
                            <span className='text-[#C52121] text-xs flex items-center gap-0.5'>
                                5.08 <Icons.arrowDown />
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
            <RevenueBarChart />
        </div>
    )
}

export default Statistics