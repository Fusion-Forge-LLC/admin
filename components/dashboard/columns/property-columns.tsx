"use client"

import { Property } from "@/api/dashboard/property-lists";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Star } from "lucide-react";

export const properties_column: ColumnDef<Property>[] = [
    {
        accessorKey: "id",
        header: () => {
            return <div className="pl-4 py-3">Id</div>
        },
        cell: ({ row }) => {
            const data = row.original;
            return (
                <p className="capitalize w-32 text-sm text-[#707070] pl-4 overflow-hidden pr-2">
                    {data._id}
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
                    <Star color="#FABB05" size={16}/> {data.rating || 4.5}
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
            return <Badge variant={status}>{data.status}</Badge>
        },
    },
    {
        accessorKey: "menu",
        header: "",
        cell: () => {
            return (
                <p className="text-sm text-[#707070] px-4">
                    <EllipsisVertical />
                </p>
            );
        },
    },
]