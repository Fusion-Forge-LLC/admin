import { DataTable } from '@/components/ui/data-table'
import EmptyState from '@/components/ui/empty-state'
import React from 'react'
import { properties_column } from '../columns/top-view-properties'

function TopViews() {
    return (
        <DataTable
            data={[]}
            columns={properties_column}
            emptyState={<EmptyState />}
            show_headings={true}
            show_pagination={false}
            showSearch={false}
            show_toolbar={false}
            className="bg-white/95"
            isLoading={false}
            className2="border-b border-b-[#D7D7D7]"
        />
    )
}

export default TopViews