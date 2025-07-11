import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function Suspend({
    btn
}:{
    userId: string,
    btn: React.RefObject<HTMLButtonElement | null>
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
            <button 
                className="text-red-500 hidden"
                ref={btn}
            >
                Suspend
            </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Suspend Account</DialogTitle>
                <DialogDescription>
                    This Vendor will no longer have access to their dashboard and their properties will be delisted.
                </DialogDescription>
                </DialogHeader>
                <div className="flex gap-4 py-4 justify-end">
                    <Button variant={"destructive"}>
                        Suspend
                    </Button>
                    <Button 
                        variant={"secondary"}
                    >
                        Cancel
                    </Button>                       
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Suspend