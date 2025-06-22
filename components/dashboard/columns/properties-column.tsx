"use client"

import { Property } from "@/api/dashboard/property-lists";
import { Icons } from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCurrency } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { useState } from "react";
import SuspendModal from "../menu/suspend-property";

export const properties_column: ColumnDef<Property>[] = [
    {
        accessorKey: "id",
        header: () => {
            return <div className="pl-4 py-3"><Checkbox /></div>
        },
        cell: () => {
            return (
                <p className="pl-4 overflow-hidden pr-2">
                    <Checkbox />
                </p>
            );
        },
    },
    {
        accessorKey: "full_name",
        header: "Full Name",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-40 text-sm text-[#707070] whitespace-nowrap px-2">
                    {data.user?.fullname}
                </p>
            );
        },
    },
    {
        accessorKey: "property_title",
        header: "Property Name",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-32 text-sm text-[#707070] whitespace-nowrap">
                    {data.property_title}
                </p>
            );
        },
    },
    {
        accessorKey: "type",
        header: "type",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-32 text-sm text-[#707070] ">
                    {data.type}
                </p>
            );
        },
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-32 text-sm text-[#707070] ">
                    {formatCurrency(data.price)}
                </p>
            );
        },
    },
    {
        accessorKey: "property_location",
        header: "Location",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-28 text-sm text-[#707070] ">
                    {data.property_address.state}
                </p>
            );
        },
    },
    {
        accessorKey: "rating",
        header: "Rating",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-20 text-sm text-[#707070]  flex items-center gap-1">
                    <Icons.reviewStar fill="#FABB05" /> {data.rating || 4.5}
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
            return <Badge variant={data.isSuspended ? "CANCELLED" : status}>{data.isSuspended ? "SUSPENDED" : status}</Badge>
        },
    },
    {
        accessorKey: "menu",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const [showModal, setShowModal] = useState(false);
            return (
                 <>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4">
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem     
                                className="text-red-500" 
                                onClick={() => setShowModal(true)}
                            >
                                {data.isSuspended ? "Unsuspend" : "Suspend"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={`/dashboard/properties/${data._id}`}>View More</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <SuspendModal isSuspended={data.isSuspended} propertyId={data._id} isOpen={showModal} closeModal={setShowModal} />
                </>
            );
        },
    },
]