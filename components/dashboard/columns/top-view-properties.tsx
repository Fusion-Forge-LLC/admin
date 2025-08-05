"use client"

import { Property } from "@/api/dashboard/property-lists";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Star } from "lucide-react";

export const properties_column: ColumnDef<Property>[] = [
    {
        accessorKey: "property_title",
        header: () => {
            return <div className="pl-4 py-3">Property Name</div>
        },
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
        accessorKey: "views",
        header: "Views",
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize  text-sm text-[#707070]  flex items-center gap-1">
                    {data.rating}
                </p>
            );
        },
    },
]