import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"  
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { navItems } from '@/constant/nav-items';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function MobileMenu() {
    const [openSheet, setOpenSheet] = useState(false);
    const pathname = usePathname();

    return (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              <SheetTrigger className="flex gap-4 lg:hidden">
                <MenuIcon />
              </SheetTrigger>
              <SheetContent className="space-y-3">
                <SheetHeader className="mb-12">
                  <SheetTitle>
                    <Link className="" href="/">
                      
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div>
                    {navItems.map((item, index) => {
                        const isActive = pathname.includes(item.link);
                        return(
                            <li key={index} className={cn( isActive && "bg-[#DFE8FF] border-l-5 border-l-[#08246C]")}>
                                <Link href={item.link} className='flex items-center gap-4 px-6 py-4 hover:bg-[#DFE8FF]/50'>
                                    <item.Icon stroke={isActive ? "#205BF3" : "#111111"} />
                                    <span className={cn(isActive && "text-[#205BF3]")}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </div>
              </SheetContent>
            </Sheet>
    )
}

export default MobileMenu