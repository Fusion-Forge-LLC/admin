"use client"

import { VendorsWithStats } from '@/api/users/vendors';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SuspendModal from "../../menu/suspend-modal";

function VendorsMenu({data}:{data: VendorsWithStats}) {
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
    )
}

export default VendorsMenu