import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography, Card, CardContent } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default Leaflet marker icon issue with bundlers
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', width: 150, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// Bar chart colors
const BAR_COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b'];

function DashboardPage() {
  const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1, background: '#fafafa', boxShadow: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom variant="subtitle2">
              Total Registered Residents
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              11,245
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, background: '#fafafa', boxShadow: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom variant="subtitle2">
              Active Evacuation Centers
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'error.main' }}>
              8 / 12
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, background: '#fafafa', boxShadow: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom variant="subtitle2">
              Urgent Hazard Incident Dispatches
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
              14
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Charts Row */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="stretch" sx={{ mb: 4 }}>

        {/* Bar Chart */}
        <Card sx={{ flex: 1, boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
          <CardContent>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
              Hazard Incidents by Quarter
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Flooding, Landslide, and Fire incidents per quarter
            </Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: 'Flooding', color: '#3b82f6' },
                { data: [51, 6, 49, 30], label: 'Landslide', color: '#8b5cf6' },
                { data: [15, 25, 30, 50], label: 'Fire', color: '#f59e0b' },
              ]}
              height={260}
              xAxis={[{
                data: ['Q1', 'Q2', 'Q3', 'Q4'],
                scaleType: 'band',
                tickLabelStyle: { fontSize: 13, fill: '#6b7280' },
                disableLine: true,
                disableTicks: true,
              }]}
              yAxis={[{
                tickLabelStyle: { fontSize: 12, fill: '#9ca3af' },
                disableLine: true,
                disableTicks: true,
              }]}
              sx={{
                '& .MuiChartsAxis-bottom .MuiChartsAxis-line': { display: 'none' },
                '& .MuiChartsAxis-left .MuiChartsAxis-line': { display: 'none' },
                '& .MuiChartsGrid-line': { stroke: '#f0f0f0' },
                '& .MuiBarElement-root': { rx: 6 },
              }}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding: 0,
                  itemMarkWidth: 10,
                  itemMarkHeight: 10,
                  markGap: 5,
                  itemGap: 16,
                  labelStyle: { fontSize: 12, fill: '#6b7280' },
                },
              }}
              margin={{ top: 10, bottom: 56, left: 36, right: 10 }}
            />
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card sx={{ flex: 1, boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
          <CardContent>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
              Incidents by District
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Distribution across districts
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Dist. 1', color: '#3b82f6' },
                      { id: 1, value: 15, label: 'Dist. 2', color: '#8b5cf6' },
                      { id: 2, value: 20, label: 'Dist. 3', color: '#f59e0b' },
                    ],
                    innerRadius: 45,
                    outerRadius: 90,
                    paddingAngle: 3,
                    cornerRadius: 5,
                    highlightScope: { fade: 'global', highlight: 'item' },
                  },
                ]}
                width={380}
                height={260}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 0,
                    itemMarkWidth: 10,
                    itemMarkHeight: 10,
                    markGap: 5,
                    itemGap: 16,
                    labelStyle: { fontSize: 12, fill: '#6b7280' },
                  },
                }}
                margin={{ top: 10, bottom: 48, left: 10, right: 10 }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Gauge */}
        <Box sx={{ width: { xs: '100%', md: 200 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card sx={{ width: '100%', boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5, textAlign: 'center' }}>
                Response Rate
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, textAlign: 'center' }}>
                Overall dispatch response
              </Typography>
              <Gauge
                width={140}
                height={140}
                value={66}
                startAngle={-110}
                endAngle={110}
                text="66%"
                sx={{
                  '& .MuiGauge-valueText': { fontSize: 20, fontWeight: 700 },
                  '& .MuiGauge-referenceArc': { fill: '#f0f0f0' },
                  '& .MuiGauge-valueArc': { fill: '#3b82f6' },
                }}
              />
            </CardContent>
          </Card>
        </Box>
      </Stack>

      {/* Recent Evacuees Log */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Recent Evacuees Log
      </Typography>
      <Box sx={{ height: 370, width: '100%', background: 'white', borderRadius: 2, boxShadow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>

      {/* Location Map */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Location Map
      </Typography>
      <Box sx={{ height: 500, width: '100%', borderRadius: 2, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
        <MapContainer center={[14.604253, 120.994314]} zoom={15} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[14.604253, 120.994314]}>
            <Popup>
              <strong>National University-Manila</strong><br />
              <em>551 F. Jhocson St, Sampaloc, Manila, 1008 Metro Manila</em>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </>
  );
}

export default DashboardPage;