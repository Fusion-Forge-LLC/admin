"use client"

import { Property } from '@/api/dashboard/property-lists';
import React from 'react'
import { EllipsisVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { useState } from "react";
import SuspendModal from "../../menu/suspend-property";

function PropertiesMenu({data}:{data: Property}) {
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
    )
}

export default PropertiesMenu