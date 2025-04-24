"use client"

import { Clients } from "@/api/users/clients";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const clients_column: ColumnDef<Clients>[] = [
    {
        accessorKey: "fullname",
        header: () => {
            return <div className="pl-4 py-3">Name</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <div className="flex items-center gap-2 pl-4 pr-2">
                    <div className="h-10 w-10 rounded-full bg-gray-300 relative overflow-hidden">
                        <Image
                            src={data.profileImage}
                            fill
                            alt={`${data.fullname} profile image`}
                        />
                    </div>
                    <p className="capitalize min-w-40 text-sm text-[#707070] whitespace-nowrap px-2">
                        {data.fullname}
                    </p>
                </div>
            );
        },
    },
    {
        accessorKey: "totalBookings",
        header: "Booking History",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="text-sm text-[#707070] px-2 whitespace-nowrap">
                    {data.totalBookings.toString().padStart(2, "0")} Booking{data.totalBookings > 1 && "s"}
                </p>
            );
        },
    },
    {
        accessorKey: "currentRentals",
        header: () => {
            return <div className="px-2 py-3 text-center">Current Rentals</div>
        },
        cell: () => <p className="capitalize pr-1 text-sm text-[#707070] text-center"> None </p>
    },
    {
        accessorKey: "createdAt",
        header: () => {
            return <div className="px-2 py-3">Reg Date</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap px-2">
                    {new Date(data.createdAt).toLocaleDateString("en-UK")}
                </p>
            );
        },
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] px-2">
                    {data.city || "-"}
                </p>
            );
        },
    },
    
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const data = row.original;
            const status = data.status.toLocaleUpperCase() as "ACTIVE" | "INACTIVE";
            return (
                <p className="text-sm text-[#707070] ">
                    <Badge variant={status}>{status}</Badge>
                </p>
            );
        },
    },
    {
        accessorKey: "menu",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger className="px-4">
                        <EllipsisVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={`/dashboard/clients/${data._id}`}>View More</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
]