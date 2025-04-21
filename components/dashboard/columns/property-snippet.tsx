import { Property } from '@/api/users/vendor';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

export const property_snippet: ColumnDef<Property>[] = [
    {
        accessorKey: "property_title",
        header: () => {
            return <div className="pl-4 py-3">Name</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pl-4 pr-2">
                    {data.property_title}
                </p>
            );
        },
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pr-2">
                    {data.type}
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
                <Badge variant={"APPROVED"}>{data.status}</Badge>
            );
        },
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pr-2">
                    {data.property_address.location}{data.property_address.location && ","} {data.property_address.state}
                </p>
            );
        },
    },
    {
        accessorKey: "views",
        header: "Views",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pr-2">
                    {data.views}
                </p>
            );
        },
    },
]