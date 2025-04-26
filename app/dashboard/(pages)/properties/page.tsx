"use client"

import { useGetPropertiesLocations } from '@/api/dashboard/locations'
import { useFetchAllProperties } from '@/api/dashboard/properties'
import { properties_column } from '@/components/dashboard/columns/properties-column'
import { Icons } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import EmptyState from '@/components/ui/empty-state'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { pageNumberCount } from '@/lib/utils'
import { ChevronDown, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const pageLimit = 10;

function Page() {
    const param = useSearchParams().entries();
    const query = Object.fromEntries(param);
    const router = useRouter();
    const {data} = useGetPropertiesLocations(undefined);
    const {data: properties, isLoading} = useFetchAllProperties(query);
    const [propertyType, setPropertyType] = useState(query["type"] || "");
    const [propertyStatus, setPropertyStatus] = useState(query["status"] || "");
    const [propertyLocation, setPropertyLocation] = useState(query["location"] || "");
    const [time, setTime] = useState(query["time"] || "");
    const [sort, setSort] = useState(query["sort"] || "");

    const updateQueryString = (key: string, value: string) => {
        const searchParams = new URLSearchParams(query);
        searchParams.delete(key);
        searchParams.append(key, value);
        const queryString = searchParams.toString();
        router.push(`?${queryString}`);
    }

    const nextPage = () => {
        let prevPage = parseInt(query["page"] || "1");
        prevPage++;
        updateQueryString("page", prevPage.toString());
    }

    const prevPage = () => {
        let prevPage = parseInt(query["page"]);
        prevPage--;
        updateQueryString("page", prevPage.toString());
    }

    const handleSortChange = (value: string) => {
        setSort(value);
        updateQueryString("sort", value);
    }

    const resetFilters = () => {
        setPropertyType("");
        setPropertyStatus("");
        setPropertyLocation("");
        setTime("");
        setSort("");
        router.push("?")
    }

    
    return (
        <div className='p-5 space-y-5'>
            <h2 className='text-[#252424] font-bold text-3xl'>Properties Management</h2>

            <div className='flex items-center  border border-[#D7D7D7] rounded-[12px] text-[#434343] w-fit'>
                <div className='filter-item px-4 h-full'>
                    <button className='py-1.5 flex items-center'>
                        <Icons.filter />
                    </button>
                </div>
                <div className='filter-item px-4 whitespace-nowrap'>
                    <button className='grid py-1.5 text-sm'>Filter By</button>
                </div>
                <div className='filter-item px-2'>
                    <Select value={propertyType} onValueChange={(value) => {
                        setPropertyType(value);
                        updateQueryString("type", value);
                    }}>
                        <SelectTrigger className="filter-select">
                            <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Property Type</SelectItem>
                            <SelectItem value="shortlet">Shortlet</SelectItem>
                            <SelectItem value="workspace">Workspace</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='filter-item px-2'>
                    <Select value={propertyStatus} onValueChange={(value) => {
                        setPropertyStatus(value);
                        updateQueryString("status", value);
                    }}>
                        <SelectTrigger className="filter-select">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='filter-item px-2'>
                    <Select value={propertyLocation} onValueChange={(value) => {
                        setPropertyLocation(value);
                        updateQueryString("location", value);
                    }}>
                        <SelectTrigger className="filter-select">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Location</SelectItem>
                            {data?.data.map((item, index) => {
                                return(
                                    <SelectItem key={index} value={item.location}>{item.location}</SelectItem>        
                                )
                            })}
                        </SelectContent>
                    </Select>
                </div>
                <div className='filter-item px-2'>
                    <Select value={time} onValueChange={(value) => {
                        setTime(value);
                        updateQueryString("time", value);
                    }}>
                        <SelectTrigger className="filter-select">
                            <SelectValue placeholder="Time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="week">Week</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                            <SelectItem value="all">All Time</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='filter-item px-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="filter-select hover:bg-transparent">
                                Sort By <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                                <DropdownMenuCheckboxItem
                                    className="capitalize"
                                    checked={sort === "rating"}
                                    onCheckedChange={() => handleSortChange("rating")}
                                >
                                    Rating
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    className="capitalize"
                                    checked={sort === "newest"}
                                    onCheckedChange={() => handleSortChange("newest")}
                                >
                                    Newest Listing
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    className="capitalize"
                                    checked={sort === "oldest"}
                                    onCheckedChange={() => handleSortChange("oldest")}
                                >
                                    Oldest Listing
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    className="capitalize"
                                    checked={sort === "lowest"}
                                    onCheckedChange={() => handleSortChange("lowest")}
                                >
                                    Low To High
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    className="capitalize"
                                    checked={sort === "highest"}
                                    onCheckedChange={() => handleSortChange("highest")}
                                >
                                    High to Low
                                </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                </div>
                <div className='filter-item px-4'>
                    <button 
                        className='text-[#EF4444] flex items-center gap-1 text-sm'
                        onClick={resetFilters}
                    >
                        <RotateCcw/>
                        Reset
                    </button>
                </div>
            </div>

            <DataTable
                data={properties?.data.properties || []}
                columns={properties_column}
                emptyState={<EmptyState note='Property List is Empty' />}
                show_headings={true}
                show_pagination={false}
                showSearch={false}
                show_toolbar={false}
                className="bg-white/95"
                isLoading={isLoading}
                className2="border-b border-b-[#D7D7D7]"
            />

            {properties?.data && (
                <div className='py-4 flex items-center justify-between'>
                    <span className='text-[#202224] font-semibold'>Showing {pageNumberCount(properties.data.currentPage, pageLimit, properties.data.totalCount)}</span>

                    <div className='flex items-center border border-[#D5D5D5] bg-[#FAFBFD] w-fit rounded-[8px] overflow-hidden'>
                        <button
                            disabled={properties?.data.currentPage === 1}
                            className='px-4 py-2.5 border-r border-r-[#D5D5D5] disabled:bg-muted disabled:cursor-not-allowed'
                            onClick={prevPage}
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            disabled={properties.data.currentPage === properties.data.totalPages}
                            className='px-4 py-2.5 disabled:bg-muted disabled:cursor-not-allowed'
                            onClick={nextPage}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page