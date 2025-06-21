"use client"

import { VendorsWithStats } from "@/api/users/vendors";
import { Icons } from "@/components/icons/icons";
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
import { useRef, useState } from "react";
import Suspend from "../menu/suspend";
import SuspendModal from "../menu/suspend-modal";

export const vendors_column: ColumnDef<VendorsWithStats>[] = [
    {
        accessorKey: "createdAt",
        header: () => {
            return <div className="pl-4 py-3">Reg Date</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize text-sm text-[#707070] whitespace-nowrap pr-2 pl-4">
                    {new Date(data.createdAt).toLocaleDateString("en-UK")}
                </p>
            );
        },
    },
    {
        accessorKey: "fullname",
        header: "Full Name",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <div className="flex items-center gap-2 ">
                    <div className="h-10 w-10 rounded-full bg-gray-300 relative overflow-hidden">
                        <Image
                            src={data.profile.profile_image}
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
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="min-w-32 text-sm text-[#707070] ">
                    {data.email}
                </p>
            );
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-28 text-sm text-[#707070] ">
                    {data.phone}
                </p>
            );
        },
    },
    {
        accessorKey: "totalProperties",
        header: "Total Properties",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-28 text-sm text-[#707070] text-center">
                    {data.totalProperties}
                </p>
            );
        },
    },
    {
        accessorKey: "profile.subscription",
        header: "Subscription",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-28 text-sm text-[#707070] text-center">
                    {data.profile.subscription || "Basic"}
                </p>
            );
        },
    },
    {
        accessorKey: "averageRating",
        header: "Avg. Rating",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize min-w-20 text-sm text-[#707070]  flex items-center gap-1">
                    <Icons.star/> {data.averageRating || "0.00"}
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
                    <Badge variant={data.isSuspended ? "CANCELLED" : status}>{data.isSuspended ? "SUSPENDED" : status}</Badge>
                </p>
            );
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
                                <Link href={`/dashboard/vendors/${data._id}`}>View More</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <SuspendModal isSuspended={data.isSuspended} userId={data._id} isOpen={showModal} closeModal={setShowModal} />
                </>
            );
        },
    },
]