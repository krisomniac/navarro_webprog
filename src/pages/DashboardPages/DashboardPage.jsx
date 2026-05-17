// pages/DashboardPages/DashboardPage.jsx
import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Sample data
const rows = [
  { id: 1, firstName: 'John', lastName: 'Snow', age: 14, status: 'Active' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31, status: 'Active' },
  { id: 3, firstName: 'Jamie', lastName: 'Lannister', age: 31, status: 'Inactive' },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11, status: 'Active' },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 25, status: 'Active' },
  { id: 6, firstName: 'Melisandre', lastName: null, age: 150, status: 'Inactive' },
  { id: 7, firstName: 'Ferrara', lastName: 'Cliffors', age: 44, status: 'Active' },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36, status: 'Active' },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65, status: 'Inactive' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'age', headerName: 'Age', width: 90 },
  { field: 'status', headerName: 'Status', width: 120 },
];

const DashboardPage = () => {
  const averageAge = (rows.reduce((sum, row) => sum + (row.age || 0), 0) / rows.filter((row) => row.age !== null).length).toFixed(1);
  const activeUsers = rows.filter(r => r.status === 'Active').length;

  // Data for charts
  const ageGroups = [
    { range: '0-25', count: rows.filter(r => r.age <= 25).length },
    { range: '26-35', count: rows.filter(r => r.age > 25 && r.age <= 35).length },
    { range: '36-50', count: rows.filter(r => r.age > 35 && r.age <= 50).length },
    { range: '50+', count: rows.filter(r => r.age > 50).length },
  ];

  const statusData = [
    { name: 'Active', value: activeUsers, color: '#4caf50' },
    { name: 'Inactive', value: rows.length - activeUsers, color: '#f44336' },
  ];

  return (
    <Box sx={{ width: '100%', p: { xs: 2, sm: 3 } }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          View your key metrics, charts, and user data all in one place.
        </Typography>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography color="primary" gutterBottom>Total Users</Typography>
              <Typography variant="h3" fontWeight="bold">{rows.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#e8f5e9' }}>
            <CardContent>
              <Typography color="success.main" gutterBottom>Active Users</Typography>
              <Typography variant="h3" fontWeight="bold">{activeUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#fff3e0' }}>
            <CardContent>
              <Typography color="warning.main" gutterBottom>Average Age</Typography>
              <Typography variant="h3" fontWeight="bold">{averageAge}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3e5f5' }}>
            <CardContent>
              <Typography color="secondary" gutterBottom>Data Points</Typography>
              <Typography variant="h3" fontWeight="bold">32</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Age Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageGroups}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>User Status</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie 
                    data={statusData} 
                    cx="50%" 
                    cy="50%" 
                    labelLine={false} 
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} 
                    outerRadius={80} 
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* User Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>User Directory</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName || '-'}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">
                      <Chip 
                        label={row.status} 
                        color={row.status === 'Active' ? 'success' : 'error'} 
                        size="small" 
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;