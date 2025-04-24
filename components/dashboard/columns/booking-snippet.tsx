import { IBooking } from '@/api/users/client';
import { Badge } from '@/components/ui/badge';
import { getDuration } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

export const booking_snippet: ColumnDef<IBooking>[] = [
    {
        accessorKey: "property_title",
        header: () => {
            return <div className="pl-4 py-3 whitespace-nowrap pr-2">Property Name</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap max-w-60 text-ellipsis overflow-hidden pl-4 pr-2">
                    {data.propertyDetails.property_title}
                </p>
            );
        },
    },
    {
        accessorKey: "booking_date",
        header: "Booking Date",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pr-2">
                    {getDuration(data.checkin, data.checkout)}
                </p>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const data = row.original;
            const status = data.status.toLocaleUpperCase() as "ACTIVE"
            return (
                <Badge variant={status}>{data.status}</Badge>
            );
        },
    },
    {
        accessorKey: "duration",
        header: "Duration",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] text-center whitespace-nowrap pr-2">
                    {data.duration}
                </p>
            );
        },
    }
]