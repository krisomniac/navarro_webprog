// src/pages/DashboardPages/ReportsPage.jsx
import React from 'react';
import { Typography, Grid, Card, CardContent, Box, Stack } from '@mui/material';
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
        <>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Reports & Analytics
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 4, color: '#666' }}>
                View charts and data visualization
            </Typography>

            {/* Summary Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#1976d2', color: 'white', borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>1,245</Typography>
                            <Typography variant="body1">Total Users</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#2e7d32', color: 'white', borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>$125K</Typography>
                            <Typography variant="body1">Total Revenue</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#ed6c02', color: 'white', borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>23.5%</Typography>
                            <Typography variant="body1">Conversion Rate</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#9c27b0', color: 'white', borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>89%</Typography>
                            <Typography variant="body1">Satisfaction</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Bar Chart */}
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
                Quarterly Sales
            </Typography>
            <Card sx={{ p: 2, mb: 4, borderRadius: 2 }}>
                <BarChart
                    series={[{ data: salesData.sales, label: 'Sales', color: '#1976d2' }]}
                    height={300}
                    xAxis={[{ data: salesData.categories, scaleType: 'band', label: 'Quarters' }]}
                    yAxis={[{ label: 'Sales ($K)' }]}
                />
            </Card>

            {/* Pie Chart & Line Chart */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Product Distribution
                    </Typography>
                    <Card sx={{ p: 2, borderRadius: 2 }}>
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
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Revenue Growth
                    </Typography>
                    <Card sx={{ p: 2, borderRadius: 2 }}>
                        <LineChart
                            xAxis={[{ data: growthData.years, label: 'Year' }]}
                            series={[
                                { data: growthData.revenue, label: 'Revenue ($K)', color: '#2e7d32' }
                            ]}
                            height={300}
                        />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default ReportsPage;