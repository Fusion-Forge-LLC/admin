import { useFetchAllProperties } from '@/api/dashboard/properties';
import { useSuspendProperty } from '@/api/property/suspend-property';
import { Button } from '@/components/ui/button'
import Loader from '@/components/ui/loader';
import { useSearchParams } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'

function SuspendModal({propertyId, isOpen, closeModal, isSuspended}:{
    propertyId: string,
    isOpen: boolean,
    closeModal: Dispatch<SetStateAction<boolean>>
    isSuspended: boolean
}) {
    const param = useSearchParams().entries();
    const query = Object.fromEntries(param);
    const {mutateAsync, isPending} = useSuspendProperty();
    const { refetch } = useFetchAllProperties(query);
    const suspendVendor = async() => {
        await mutateAsync({
            propertyId,
            data: {isSuspended: !isSuspended}
        });
        refetch()
        setTimeout(() => closeModal(false), 2000);
    }

    return (
        <>
            {isOpen && <div className='fixed top-0 left-0 h-screen w-full z-50'>
                <div className='bg-black/50 h-full w-full absolute top-0 left-0'/>
                <div className='bg-white p-5 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-96'>
                    <header className='space-y-2'>
                        <h4 className='font-semibold text-xl'>Suspend Property</h4>
                        <p className='opacity-75'>
                            This property will no longer be listed on the property listing page.
                        </p>
                    </header>
                    <div className="flex gap-4 pt-6 justify-end">
                        <Button 
                            variant={"destructive"}
                            onClick={suspendVendor}
                            disabled={isPending}
                        >
                            {isPending ? <Loader /> : isSuspended ? "Unsuspend" : "Suspend"}
                        </Button>
                        <Button 
                            variant={"secondary"}
                            onClick={() =>closeModal(false)}
                            disabled={isPending}
                        >
                            Cancel
                        </Button>                       
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SuspendModal