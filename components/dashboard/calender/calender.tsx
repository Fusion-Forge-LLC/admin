import { Icons } from "@/components/icons/icons";
import { Input } from "@/components/ui/input";
import { getDateSevenDaysAgo } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function Calender() {
    const ref = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<DateRange>({
        from: getDateSevenDaysAgo(),
        to: new Date(),
    });
    const [showDate, setShowDate] = useState(false);

    useEffect(() => {
        function handleOutSideClick(event: MouseEvent){
            const targetedElement = event.target as Node
            if(ref.current && !ref.current.contains(targetedElement)){
                setShowDate(false)
            }
        }

        document.addEventListener("click", handleOutSideClick)

        return () => document.removeEventListener("click", handleOutSideClick)
    })

    const selectedDate = useMemo(() => {
        if (!selected?.from || !selected?.to) return "";
        
        const fromDate = selected.from;
        const toDate = selected.to;
        const to = toDate.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
        
        if (fromDate.getFullYear() === toDate.getFullYear()) {
            const from = fromDate.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
            return `${from} - ${to}`;
        } else {
            const from = fromDate.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
            return `${from} - ${to}`;
        }
    }, [selected]);

    return (
        <div className="relative max-w-[300px] ml-auto" ref={ref}>
            <div className="relative">
                <Icons.calendar className="absolute left-2 top-1/2 -translate-y-1/2" />
                <Input 
                    type="text" 
                    value={selectedDate} 
                    className="px-10 h-11 cursor-pointer" 
                    readOnly={true}
                    onClick={() => setShowDate(prevState => !prevState)}
                />
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2" color="#707070" />
            </div>
            {showDate && 
            <div className="absolute top-12 right-0 bg-white p-2">
                <DayPicker
                    animate
                    mode={"range"}
                    selected={selected}
                    onSelect={setSelected}
                    disabled={{after: new Date()}}
                    required
                />
            </div>}
        </div>
  );
}