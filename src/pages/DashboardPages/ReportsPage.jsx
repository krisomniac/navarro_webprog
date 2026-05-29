// src/pages/DashboardPages/ReportsPage.jsx
import React from 'react';
import { BarChart, PieChart, LineChart } from '@mui/x-charts';

const ReportsPage = () => {
    // Sample data
    const salesData = {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        sales: [35, 44, 24, 34]
    };

    const platformData = [
        { id: 0, value: 35, label: 'Product A' },
        { id: 1, value: 25, label: 'Product B' },
        { id: 2, value: 20, label: 'Product C' },
        { id: 3, value: 20, label: 'Product D' },
    ];

    const growthData = {
        years: ['2020', '2021', '2022', '2023'],
        revenue: [400, 600, 800, 1200]
    };

    return (
        <div className="flex w-full flex-col">
            {/* Header Section */}
            <div className="px-6 py-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Reports & Analytics
                        </h1>
                        <p className="mt-2 text-gray-600">
                            View charts and data visualization
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Report Period</p>
                        <p className="text-4xl font-bold text-gray-900">2024</p>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="px-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">1,245</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Total Revenue</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">$125K</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Conversion Rate</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">23.5%</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Satisfaction</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">89%</p>
                    </div>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="px-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quarterly Sales</h2>
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                    <BarChart
                        series={[{ data: salesData.sales, label: 'Sales', color: '#3b82f6' }]}
                        height={300}
                        xAxis={[{ data: salesData.categories, scaleType: 'band', label: 'Quarters' }]}
                        yAxis={[{ label: 'Sales ($K)' }]}
                    />
                </div>
            </div>

            {/* Pie Chart & Line Chart */}
            <div className="px-6 mb-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Distribution</h2>
                        <div className="border border-gray-200 rounded-xl p-4 bg-white">
                            <PieChart
                                series={[{
                                    data: platformData,
                                    innerRadius: 30,
                                    outerRadius: 100,
                                }]}
                                height={300}
                                slotProps={{
                                    legend: { position: { vertical: 'middle', horizontal: 'right' } }
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Revenue Growth</h2>
                        <div className="border border-gray-200 rounded-xl p-4 bg-white">
                            <LineChart
                                xAxis={[{ data: growthData.years, label: 'Year' }]}
                                series={[
                                    { data: growthData.revenue, label: 'Revenue ($K)', color: '#3b82f6' }
                                ]}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;