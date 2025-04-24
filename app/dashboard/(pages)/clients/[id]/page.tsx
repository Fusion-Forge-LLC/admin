"use client"

import { useFetchClientDetails } from '@/api/users/client'
import { booking_snippet } from '@/components/dashboard/columns/booking-snippet'
import Card from '@/components/dashboard/vendor/card'
import Card2 from '@/components/dashboard/vendor/card-2'
import ListItem from '@/components/dashboard/vendor/lists'
import { Icons } from '@/components/icons/icons'
import { DataTable } from '@/components/ui/data-table'
import EmptyState from '@/components/ui/empty-state'
import { cn, formatDate, formatDateShort, getDuration } from '@/lib/utils'
import { useParams } from 'next/navigation'
import React from 'react'

type Param = { id: string }

function Page() {
    const params = useParams() as Param;
    const {data, isLoading} = useFetchClientDetails(params.id);
    console.log(data?.data.reviews);
    if(isLoading){
        return(
            <div className='p-5 grid grid-cols-2 gap-5'>
                <Card title='Basic Information' isLoading={isLoading} >
                    <ul></ul>
                </Card>

                <Card title='Current Rental' isLoading={isLoading} >
                    <ul></ul>
                </Card>
            </div>
        )
    }

    if(!data){
        return(
            <div>An error occured</div>
        )
    }

    const {
        fullname,
        phone,
        email,
        createdAt,
        hasActiveBooking,
        activeBooking,
        recentBookings,
        propertyDetails,
        reviews
    } = data.data
    return (
        <div className='p-5 grid grid-cols-2 gap-5'>
            <Card title='Basic Information' isLoading={isLoading}>
                <ul className='space-y-5'>
                    <ListItem
                        title='Plan Type'
                        body={fullname}
                        Icon={Icons.user}
                    />
                    <ListItem
                        title='Phone Number'
                        body={phone || "-"}
                        Icon={Icons.call}
                    />
                    <ListItem
                        title='Email Address'
                        body={email}
                        Icon={Icons.mail}
                    />
                    <ListItem
                        title='Registration Date'
                        body={"Join on " + formatDate(createdAt)}
                        Icon={Icons.calendar2}
                    />
                </ul>
            </Card>

            <Card title='Current Rental' isLoading={isLoading}>
                <ul className='space-y-5'>
                    <ListItem
                        title='Property Name'
                        body={hasActiveBooking ? (
                            <div>{propertyDetails.property_title} <span className='text-[#DDDDDD]'>|</span> <span className='text-[#205BF3] capitalize'>{propertyDetails.type}</span></div>
                        ) : "-"}
                        Icon={Icons.building3}
                    />
                    <ListItem
                        title='Rental Period'
                        body={hasActiveBooking ? getDuration(activeBooking.checkin, activeBooking.checkout) : "-"}
                        Icon={Icons.calendar2}
                    />
                    <ListItem
                        title='Status'
                        body={(
                            <div className='flex items-center gap-1'>
                                <span className={cn("grid h-3 w-3 rounded-full", hasActiveBooking ? "bg-[#21C55D]" : "bg-red-500")} />
                                {hasActiveBooking ? "Active" : "Inactive"}
                            </div>
                        )}
                        Icon={Icons.userStatus}
                    />
                    <ListItem
                        title='Duration'
                        body={hasActiveBooking ? `${activeBooking.duration} day${activeBooking.duration > 1 && "s"}` : "-"}
                        Icon={Icons.calendar2}
                    />
                </ul>
            </Card>

            <Card2 
                title='Properties Listed'
                link=''
                isLoading={isLoading}
            >
                <DataTable
                    data={recentBookings || []}
                    columns={booking_snippet}
                    emptyState={<EmptyState note='No booking found'/>}
                    show_headings={true}
                    show_pagination={false}
                    showSearch={false}
                    show_toolbar={false}
                    isLoading={isLoading}
                    className2="border-b border-b-[#F1F1F1]"
                />
            </Card2>
            
            <div>
                <h4 className='text-[#1E1E1E] font-medium py-4'>Reviews</h4> 
                <ul>
                    {reviews.map(item => {
                        return(
                            <div 
                                key={item._id}
                                className='border border-[#F1F1F1] rounded-[12px] overflow-hidden'
                            >
                                <header className='bg-[#F9F9F9] p-5 border-b border-b-[#F1F1F1]'>
                                    <h4 className='text-[#434343] font-medium'>{item.propertyInfo.property_title}</h4>
                                    <span className='text-[#A1A1A1]'>{formatDateShort(new Date())}</span>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-1'>
                                            {Array.from({length: 5}).map((_, index) => {
                                                return (
                                                    <Icons.reviewStar
                                                        fill={index + 1 <= item.rating ? "#FABB05" : "#888888"}
                                                        opacity={index + 1 <= item.rating ? 1 : 0.5}
                                                    />        
                                                );
                                            })}
                                        </div>
                                        <span>{"("}{item.rating}/5{")"}</span>
                                    </div>
                                </header>
                                <p className='p-5 text-[#707070]'>{item.review_text}</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default Page