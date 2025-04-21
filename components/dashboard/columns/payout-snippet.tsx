import { Payout } from '@/api/users/vendor';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

export const payout_snippet: ColumnDef<Payout>[] = [
    {
        accessorKey: "createdAt",
        header: () => {
            return <div className="pl-4 py-3">Date</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pl-4 pr-2">
                    {formatDate(data.createdAt)}
                </p>
            );
        },
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pr-2">
                    {formatCurrency(data.amount)}
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
]