import { DataTable } from '@/components/ui/data-table'
import EmptyState from '@/components/ui/empty-state'
import React from 'react'
import { properties_column } from '../columns/property-columns'
import { useFetchProperties } from '@/api/dashboard/property-lists'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function PropertyLists() {
    const pathName = usePathname();
    const router = useRouter();
    const param = useSearchParams().entries();
    const query = Object.fromEntries(param);
    const {data, isLoading} = useFetchProperties(query);
    
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
        <div>
            <DataTable
                data={data?.data.properties || []}
                columns={properties_column}
                emptyState={<EmptyState />}
                show_headings={true}
                show_pagination={false}
                showSearch={false}
                show_toolbar={false}
                className="bg-white/95"
                isLoading={isLoading}
          />

          <div className='py-4 flex items-center justify-between'>
            {data?.data && (
                <span className='text-[#202224] font-semibold'>Showing {((data.data.currentPage - 1) * 5) + 1}-{data.data.currentPage * 5} of {data?.data.totalCount}</span>
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
          </div>
        </div>
    )
}

export default PropertyLists