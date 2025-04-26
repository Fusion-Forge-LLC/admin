"use client"

import { useFetchVendorDetails } from '@/api/users/vendor'
import { payout_snippet } from '@/components/dashboard/columns/payout-snippet'
import { property_snippet } from '@/components/dashboard/columns/property-snippet'
import Card from '@/components/dashboard/vendor/card'
import Card2 from '@/components/dashboard/vendor/card-2'
import ListItem from '@/components/dashboard/vendor/lists'
import { Icons } from '@/components/icons/icons'
import { DataTable } from '@/components/ui/data-table'
import EmptyState from '@/components/ui/empty-state'
import { formatDate } from '@/lib/utils'
import { useParams } from 'next/navigation'
import React from 'react'

type Param = { id: string }

function Page() {
    const params = useParams() as Param;
    const {data, isLoading} = useFetchVendorDetails(params.id);

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
        businessProfile,
        recentProperties,
        recentPayouts
    } = data.data
    return (
        <div className='p-5 grid grid-cols-2 gap-5'>
            <Card title='Basic Information' isLoading={isLoading}>
                <ul className='space-y-5'>
                    <ListItem
                        title='Full Name'
                        body={fullname}
                        Icon={Icons.user}
                    />
                    <ListItem
                        title='Phone Number'
                        body={phone}
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

            <Card title='Subscription Plan' isLoading={isLoading}>
                <ul className='space-y-5'>
                    <ListItem
                        title='Plan Type'
                        body={businessProfile.subscription ? businessProfile.subscription.plan : "Basic"}
                    />
                    <ListItem
                        title='Start Date'
                        body={formatDate(businessProfile.subscription ? businessProfile.subscription.subscription_date : createdAt)}
                    />
                    <ListItem
                        title='Expiry Date'
                        body={businessProfile.subscription ? formatDate(businessProfile.subscription.subscription_date) : "Never"}
                    />
                    <ListItem
                        title='Payment Status'
                        body='Paid in full'
                    />
                </ul>
            </Card>

            <Card2 
                title='Properties Listed'
                link=''
                isLoading={isLoading}
            >
                <DataTable
                    data={recentProperties || []}
                    columns={property_snippet}
                    emptyState={<EmptyState />}
                    show_headings={true}
                    show_pagination={false}
                    showSearch={false}
                    show_toolbar={false}
                    isLoading={isLoading}
                    className2="border-b border-b-[#F1F1F1]"
                />
            </Card2>

            <Card2 
                title='Payouts'
                link=''
                isLoading={isLoading}
            >
                <DataTable
                    data={recentPayouts || []}
                    columns={payout_snippet}
                    emptyState={<EmptyState />}
                    show_headings={true}
                    show_pagination={false}
                    showSearch={false}
                    show_toolbar={false}
                    isLoading={isLoading}
                    className2="border-b border-b-[#F1F1F1]"
                />
            </Card2>
            

        </div>
    )
}

export default Page