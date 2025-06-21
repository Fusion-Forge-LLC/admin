import { useModifyVendor } from '@/api/users/suspend-vendor'
import { Button } from '@/components/ui/button'
import Loader from '@/components/ui/loader';
import React, { Dispatch, SetStateAction, useState } from 'react'

function SuspendModal({userId, isOpen, closeModal, isSuspended}:{
    userId: string,
    isOpen: boolean,
    closeModal: Dispatch<SetStateAction<boolean>>
    isSuspended: boolean
}) {
    const {mutateAsync, isPending} = useModifyVendor();

    const suspendVendor = async() => {
        await mutateAsync({
            userId,
            data: {isSuspended: !isSuspended}
        });
        setTimeout(() => closeModal(false), 2000);
    }

    return (
        <>
            {isOpen && <div className='fixed top-0 left-0 h-screen w-full z-50'>
                <div className='bg-black/50 h-full w-full absolute top-0 left-0'/>
                <div className='bg-white p-5 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-96'>
                    <header className='space-y-2'>
                        <h4 className='font-semibold text-xl'>Suspend Account</h4>
                        <p className='opacity-75'>
                            This Vendor will no longer have access to their dashboard and their properties will be delisted.
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