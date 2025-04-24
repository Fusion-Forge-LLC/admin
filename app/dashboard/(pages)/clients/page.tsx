"use client"

import React from 'react'
import { DataTable } from '@/components/ui/data-table'
import EmptyState from '@/components/ui/empty-state'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useGetClients } from '@/api/users/clients'
import { clients_column } from '@/components/dashboard/columns/clients-column'

function Page() {
    const pathName = usePathname();
    const router = useRouter();
    const param = useSearchParams().entries();
    const query = Object.fromEntries(param);
    const {data, isLoading} = useGetClients(query);

    console.log(data);

    
    
    const nextPage = () => {
        let prevPage = parseInt(query["page"] || "1");
        prevPage++;
        router.push(pathName+"?page="+prevPage);
    }

    const prevPage = () => {
        let prevPage = parseInt(query["page"]);
        prevPage--;
        router.push(pathName+"?page="+prevPage);
    }

    return (
        <div className='p-5 border'>
            <h4 className='text-[#252424] text-3xl font-bold mb-6'>Clients</h4>

            <DataTable
                data={data?.data.results || []}
                columns={clients_column}
                emptyState={<EmptyState />}
                show_headings={true}
                show_pagination={false}
                showSearch={false}
                show_toolbar={false}
                className="bg-white/95"
                isLoading={isLoading}
            />

            {!isLoading && <div className='py-4 flex items-center justify-between'>
                {data?.data && (
                    <span className='text-[#202224] font-semibold'>Showing {((data.data.currentPage - 1) * 10) + 1}-{Math.min(data.data.currentPage * 10, data?.data.totalCount)} of {data?.data.totalCount}</span>
                )}

                <div className='flex items-center border border-[#D5D5D5] bg-[#FAFBFD] w-fit rounded-[8px] overflow-hidden'>
                    <button
                        disabled={data?.data.currentPage === 1}
                        className='px-4 py-2.5 border-r border-r-[#D5D5D5] disabled:bg-muted disabled:cursor-not-allowed'
                        onClick={prevPage}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        disabled={data?.data.currentPage === data?.data.totalPages}
                        className='px-4 py-2.5 disabled:bg-muted disabled:cursor-not-allowed'
                        onClick={nextPage}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>    }        
        </div>
    )
}

export default Page