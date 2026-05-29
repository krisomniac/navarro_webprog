import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 150,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'John', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jamie', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Cliffors', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
    const averageAge = (
        rows.reduce((sum, row) => sum + (row.age || 0), 0) /
        rows.filter((row) => row.age !== null).length
    ).toFixed(1);

    return (
        <div className="flex w-full flex-col">
            {/* Hero Section - Simplified */}
            <div className="px-6 py-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Dashboard
                        </h1>
                        <p className="mt-2 text-gray-600">
                            View your key metrics, charts, and user data all in one place.
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-4xl font-bold text-gray-900">{rows.length}</p>
                    </div>
                </div>
            </div>

            {/* Summary Cards - Simplified Grid */}
            <div className="px-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{rows.length}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Average Age</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{averageAge}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Active Users</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{rows.filter(r => r.age).length}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Data Points</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">32</p>
                    </div>
                </div>
            </div>

            {/* Gauges - Centered */}
            <div className="px-6 mb-6">
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                    <div className="flex justify-center gap-8">
                        <div className="text-center">
                            <Gauge width={120} height={120} value={50} />
                            <p className="text-sm text-gray-600 mt-2">Metric 1</p>
                        </div>
                        <div className="text-center">
                            <Gauge width={120} height={120} value={50} valueMin={10} valueMax={60} />
                            <p className="text-sm text-gray-600 mt-2">Metric 2</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts - Simplified Layout */}
            <div className="px-6 mb-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-4 bg-white">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Data</h3>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34], label: 'Series A', color: '#3b82f6' },
                                { data: [51, 6, 49, 30], label: 'Series B', color: '#6b7280' },
                            ]}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            height={280}
                        />
                    </div>
                    <div className="border border-gray-200 rounded-xl p-4 bg-white">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution</h3>
                        <div className="flex justify-center">
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'Category A' },
                                            { id: 1, value: 15, label: 'Category B' },
                                            { id: 2, value: 20, label: 'Category C' },
                                        ],
                                    },
                                ]}
                                width={350}
                                height={220}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* User Table */}
            <div className="px-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">User Directory</h2>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>
                </div>
            </div>

            {/* Map Section */}
            <div className="px-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <Box sx={{ height: 450, width: '100%' }}>
                        <MapContainer center={[14.604253, 120.994314]} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[14.604253, 120.994314]}>
                                <Popup>
                                    <strong>National University-Manila</strong>
                                    <br />
                                    <i>551 F. Jhocson St, Sampaloc, Manila</i>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;