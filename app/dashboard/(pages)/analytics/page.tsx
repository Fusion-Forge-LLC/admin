"use client"

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Chart, ChartConfiguration } from 'chart.js';

// Explicitly register Chart.js components for line, pie, and bar charts
import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  PieController,
  ArcElement,
  BarController,
  BarElement,
} from 'chart.js';
import { Calender } from '@/components/dashboard/calender/calender';
import Card from '@/components/dashboard/analytics/card';
import { Icons } from '@/components/icons/icons';
import { Eye, HouseIcon, Timer } from 'lucide-react';
import TopViews from '@/components/dashboard/analytics/top-views';
import DeviceList from '@/components/dashboard/analytics/device';
import { useGetAnalytics } from '@/api/analytics/analytics';
import Loader from '@/components/ui/loader';
import { formatCurrency } from '@/lib/utils';
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  PieController,
  ArcElement,
  BarController,
  BarElement
);

// const ChartComponent = dynamic(() => import('chart.js/auto').then((mod) => mod.Chart), { ssr: false });

// Define types for analytics data
interface BookingType {
  name: string;
  value: number;
}

interface AnalyticsData {
  totalBookings: number;
  revenue: number;
  occupancyRate: number;
  avgBookingDuration: number;
  totalPageViews: number;
  totalPropertyViews: number;
  dailyPageViews: number[];
  monthlyPageViews: number[];
  yearlyPageViews: number[];
  monthlyBookings: number[];
  bookingTypes: BookingType[];
}


// Reusable Chart Card Component
interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
  <div className="py-4 space-y-5 bg-[#F2F4F5] border border-[#DCE4F9] p-5 rounded-[12px] h-full flex flex-col">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
    {children}
  </div>
);

const Dashboard: React.FC = () => {
  const {data, isPending} = useGetAnalytics();
  
  // Sample data for analytics
  const analyticsData: AnalyticsData = {
    totalBookings: 245,
    revenue: 12500,
    occupancyRate: 78,
    avgBookingDuration: 3.2,
    totalPageViews: 15420,
    totalPropertyViews: 8920,
    dailyPageViews: [120, 150, 130, 170, 140, 160, 180, 155, 145, 165, 175, 190, 200, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20],
    monthlyPageViews: [1200, 1350, 1500, 1600, 1700, 1650, 1800, 1750, 1600, 1550, 1700, 1800],
    yearlyPageViews: [12000, 13500, 15000],
    monthlyBookings: [30, 45, 60, 50, 70, 65, 80, 75, 60, 55, 70, 80],
    bookingTypes: [
      { name: 'Shortlet', value: 65 },
      { name: 'Workspace', value: 35 },
    ],
  };

  // State for selected page view period and chart loading
  const [pageViewPeriod, setPageViewPeriod] = useState<'daily' | 'monthly' | 'yearly'>('daily');
  const [isChartLoaded, setIsChartLoaded] = useState<boolean>(false);

  // Refs for chart instances to manage updates
  const bookingsChartRef = useRef<Chart | null>(null);
  const bookingTypesChartRef = useRef<Chart | null>(null);
  const pageViewsChartRef = useRef<Chart | null>(null);

  // Initialize and update charts
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initializeChart = (
      canvasId: string,
      config: ChartConfiguration,
      chartRef: React.MutableRefObject<Chart | null>
    ) => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
      if (!canvas) {
        console.error(`Canvas element with ID ${canvasId} not found`);
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error(`Failed to get 2D context for canvas ${canvasId}`);
        return;
      }

      // Destroy existing chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, config);
    };

    // Monthly Bookings Chart
    initializeChart('bookingsChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Monthly Bookings',
          data: analyticsData.monthlyBookings,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.4,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    }, bookingsChartRef);

    // Booking Types Chart
    initializeChart('bookingTypesChart', {
      type: 'pie',
      data: {
        labels: analyticsData.bookingTypes.map((type) => type.name),
        datasets: [{
          data: analyticsData.bookingTypes.map((type) => type.value),
          backgroundColor: ['#3B82F6', '#10B981'],
        }],
      },
      options: {
        responsive: true,
      },
    }, bookingTypesChartRef);

    // Page Views Chart
    const labels = pageViewPeriod === 'daily'
      ? Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
      : pageViewPeriod === 'monthly'
      ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      : ['2023', '2024', '2025'];
    const data = pageViewPeriod === 'daily'
      ? analyticsData.dailyPageViews
      : pageViewPeriod === 'monthly'
      ? analyticsData.monthlyPageViews
      : analyticsData.yearlyPageViews;

    initializeChart('pageViewsChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: `Page Views (${pageViewPeriod.charAt(0).toUpperCase() + pageViewPeriod.slice(1)})`,
          data,
          backgroundColor: '#F59E0B',
          borderColor: '#D97706',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    }, pageViewsChartRef);

    setIsChartLoaded(true);

    // Cleanup on unmount
    return () => {
      if (bookingsChartRef.current) bookingsChartRef.current.destroy();
      if (bookingTypesChartRef.current) bookingTypesChartRef.current.destroy();
      if (pageViewsChartRef.current) pageViewsChartRef.current.destroy();
    };
  }, [pageViewPeriod, analyticsData]);

  if(isPending) {
    return <Loader />
  }

  if(!data){
    return (
      <div>
        An error occured
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8'>
            <h4 className='capitalize text-[#252424] text-2xl font-bold'>
              Analytics Management
            </h4>

            <div className='flex-1'>
                
                <Calender />
            </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card 
            title='Total Revenue' 
            icon={<Icons.money />} 
            main={formatCurrency(data.data.revenue)} 
            text={<span className='text-sm'><span className='text-[#21C55D]'>+20.1%</span> from last month</span>} 
          />
          <Card 
            title='Total Booking' 
            icon={<Icons.building2 />} 
            main={data.data.booking.toLocaleString()} 
            text={<span className='text-sm'><span className='text-[#21C55D]'>+20.1%</span> from last month</span>} 
          />
          <Card 
            title='Avg. Booking Stay' 
            icon={<Timer color='#FFF' size={18} />} 
            main={data.data.avgDuration.toLocaleString()} 
            text={<span className='text-sm'><span className='text-[#21C55D]'>+20.1%</span> from last month</span>} 
          />
          <Card 
            title='Total Page Views' 
            icon={<Eye color='#FFF' size={18} />} 
            main='243,829' 
            text={<span className='text-sm'><span className='text-[#21C55D]'>+20.1%</span> from last month</span>} 
          />
          <Card 
            title='Total Property Views' 
            icon={<HouseIcon color='#FFF' size={18} />} 
            main='243,829' 
            text={<span className='text-sm'><span className='text-[#21C55D]'>+20.1%</span> from last month</span>} 
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Monthly Bookings Trend">
            {isChartLoaded ? (
              <canvas id="bookingsChart" className="w-full h-64"></canvas>
            ) : (
              <div className="w-full h-64 flex items-center justify-center text-gray-500">Loading chart...</div>
            )}
          </ChartCard>
          
          <ChartCard title="Page Views Over Time">
            <div className="flex justify-end mb-4">
              <select
                className="p-2 border rounded-md"
                value={pageViewPeriod}
                onChange={(e) => setPageViewPeriod(e.target.value as 'daily' | 'monthly' | 'yearly')}
              >
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            {isChartLoaded ? (
              <canvas id="pageViewsChart" className="w-full h-64"></canvas>
            ) : (
              <div className="w-full h-64 flex items-center justify-center text-gray-500">Loading chart...</div>
            )}
          </ChartCard>
        </div>

        {/* tables */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-8">
          <div className='col-span-2'>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Top View Properties</h3>
            <TopViews />
          </div>

          <div>
            <DeviceList />
          </div>
          <div className='py-4 space-y-5 bg-[#F2F4F5] border border-[#DCE4F9] p-5 rounded-[12px] h-full flex flex-col'>
            <h4 className='text-[#434343] text-sm font-medium'>Most Visited Pages</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;