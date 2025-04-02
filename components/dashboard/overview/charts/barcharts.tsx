"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useFetchChart } from "@/api/dashboard/chart"
import Loader from "@/components/ui/loader"

const chartConfig = {
  booking: {
    label: "Booking",
    color: "#21C55D",
  },
  payout: {
    label: "Payout",
    color: "#C52121",
  },
} satisfies ChartConfig

export function RevenueBarChart() {
    const{ data, isLoading } = useFetchChart();

    if(isLoading){
        return(
            <div>
                <Loader />
            </div>
        )
    }

    if(!data){
        return (
            <span>An error occured</span>
        )
    }

    console.log(data.data)
  return (
      <div>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data.data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="payout"
              stackId="a"
              fill="#C52121"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="booking"
              stackId="a"
              fill="#21C55D"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
  )
}
