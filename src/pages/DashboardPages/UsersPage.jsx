// src/pages/DashboardPages/UsersPage.jsx
import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

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
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable',
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
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const UsersPage = () => {
    // Calculate stats
    const totalUsers = rows.length;
    const activeUsers = rows.filter(row => row.age !== null).length;
    const averageAge = (
        rows.reduce((sum, row) => sum + (row.age || 0), 0) /
        rows.filter((row) => row.age !== null).length
    ).toFixed(1);

    return (
        <div className="flex w-full flex-col">
            {/* Header Section */}
            <div className="px-6 py-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Users Management
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Manage and view all users in the system
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-4xl font-bold text-gray-900">{totalUsers}</p>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="px-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{totalUsers}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Active Users</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{activeUsers}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5 bg-white">
                        <p className="text-sm text-gray-500">Average Age</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{averageAge}</p>
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
                            pageSizeOptions={[5, 10, 25]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            sx={{
                                border: 0,
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: '#f9fafb',
                                },
                            }}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;