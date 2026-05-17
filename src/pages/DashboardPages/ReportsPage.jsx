// pages/DashboardPages/ReportsPage.jsx
import { useState, useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Download,
  Print,
  Refresh,
  TrendingUp,
  PeopleAlt,
  Description,
  CheckCircle,
  Visibility,
  Edit,
  Delete,
  Add,
  Search,
} from '@mui/icons-material';

// Enhanced sample data
const sampleReports = [
  { id: 1, title: 'Q4 Sales Report', type: 'sales', generatedBy: 'Alicia Reyes', department: 'Sales', status: 'completed', date: '2024-01-15', views: 45 },
  { id: 2, title: 'User Analytics Q4', type: 'analytics', generatedBy: 'Marco Santos', department: 'Marketing', status: 'pending', date: '2024-01-10', views: 23 },
  { id: 3, title: 'Inventory Summary', type: 'inventory', generatedBy: 'Blanca Cruz', department: 'Operations', status: 'completed', date: '2024-01-05', views: 67 },
  { id: 4, title: 'Financial Report', type: 'financial', generatedBy: 'Nathan Diaz', department: 'Finance', status: 'in-progress', date: '2024-01-12', views: 34 },
  { id: 5, title: 'Customer Feedback', type: 'analytics', generatedBy: 'Jasmine Garcia', department: 'Customer Success', status: 'completed', date: '2024-01-08', views: 89 },
  { id: 6, title: 'Product Performance', type: 'sales', generatedBy: 'Ethan Lopez', department: 'Product', status: 'pending', date: '2024-01-14', views: 12 },
  { id: 7, title: 'Marketing Campaign', type: 'analytics', generatedBy: 'Alicia Reyes', department: 'Marketing', status: 'completed', date: '2024-01-11', views: 56 },
  { id: 8, title: 'Budget Forecast', type: 'financial', generatedBy: 'Marco Santos', department: 'Finance', status: 'in-progress', date: '2024-01-09', views: 28 },
];

// Chart data
const monthlyData = [
  { month: 'Jan', generated: 12, completed: 8 },
  { month: 'Feb', generated: 19, completed: 15 },
  { month: 'Mar', generated: 15, completed: 12 },
  { month: 'Apr', generated: 22, completed: 18 },
  { month: 'May', generated: 28, completed: 24 },
  { month: 'Jun', generated: 25, completed: 21 },
];

const categoryData = [
  { name: 'Sales', value: 35, color: '#f44336' },
  { name: 'Analytics', value: 28, color: '#2196f3' },
  { name: 'Inventory', value: 22, color: '#4caf50' },
  { name: 'Financial', value: 15, color: '#ff9800' },
];

const statusData = [
  { name: 'Completed', value: 45, color: '#4caf50' },
  { name: 'In Progress', value: 28, color: '#ff9800' },
  { name: 'Pending', value: 27, color: '#f44336' },
];

const ReportsPage = () => {
  const { globalSearchQuery, setGlobalSearchQuery } = useOutletContext();
  const printRef = useRef(null);
  const [reports, setReports] = useState(sampleReports);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState(globalSearchQuery || '');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [chartType, setChartType] = useState('overview');

  // Sync with global search
  useEffect(() => {
    setSearchTerm(globalSearchQuery);
  }, [globalSearchQuery]);

  // Listen for global search events
  useEffect(() => {
    const handleGlobalSearch = (event) => {
      setSearchTerm(event.detail);
    };
    
    window.addEventListener("globalSearch", handleGlobalSearch);
    return () => window.removeEventListener("globalSearch", handleGlobalSearch);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      setReports(reports.filter(report => report.id !== id));
    }
  };

  const handleRefresh = () => {
    setReports([...sampleReports]);
    setSearchTerm('');
    setTypeFilter('all');
    setStatusFilter('all');
    if (setGlobalSearchQuery) {
      setGlobalSearchQuery('');
    }
  };

  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLocalSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (setGlobalSearchQuery) {
      setGlobalSearchQuery(value);
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = searchTerm === "" ||
      `${report.title} ${report.generatedBy} ${report.department}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || report.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const paginatedReports = filteredReports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'success';
      case 'pending': return 'error';
      case 'in-progress': return 'warning';
      default: return 'default';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'completed': return 'Completed';
      case 'pending': return 'Pending';
      case 'in-progress': return 'In Progress';
      default: return status;
    }
  };

  const stats = {
    totalReports: reports.length,
    completedRate: ((reports.filter(r => r.status === 'completed').length / reports.length) * 100).toFixed(1),
    totalViews: reports.reduce((sum, r) => sum + r.views, 0),
    activeDepartments: [...new Set(reports.map(r => r.department))].length,
  };

  return (
    <Box sx={{ width: '100%', p: { xs: 2, sm: 3 } }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Reports & Analytics</Typography>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Export Data">
            <Button variant="outlined" startIcon={<Download />} onClick={handleExport}>
              Export
            </Button>
          </Tooltip>
          <Tooltip title="Print Report">
            <Button variant="outlined" startIcon={<Print />} onClick={handlePrint}>
              Print
            </Button>
          </Tooltip>
          <Tooltip title="Refresh Data">
            <IconButton onClick={handleRefresh} color="primary">
              <Refresh />
            </IconButton>
          </Tooltip>
          <Button variant="contained" startIcon={<Add />} onClick={() => { setSelectedReport(null); setOpenDialog(true); }}>
            Generate Report
          </Button>
        </Stack>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#e3f2fd', height: '100%' }}>
            <CardContent>
              <Typography color="primary" gutterBottom variant="body2">Total Reports</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.totalReports}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <TrendingUp sx={{ fontSize: 16, color: '#4caf50' }} />
                <Typography variant="caption" color="text.secondary">+12% vs last month</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#e8f5e9', height: '100%' }}>
            <CardContent>
              <Typography color="success.main" gutterBottom variant="body2">Completion Rate</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.completedRate}%</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <CheckCircle sx={{ fontSize: 16, color: '#4caf50' }} />
                <Typography variant="caption" color="text.secondary">Reports completed on time</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#fff3e0', height: '100%' }}>
            <CardContent>
              <Typography color="warning.main" gutterBottom variant="body2">Total Views</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.totalViews}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <Visibility sx={{ fontSize: 16, color: '#ff9800' }} />
                <Typography variant="caption" color="text.secondary">Across all reports</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3e5f5', height: '100%' }}>
            <CardContent>
              <Typography color="secondary" gutterBottom variant="body2">Departments</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.activeDepartments}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <PeopleAlt sx={{ fontSize: 16, color: '#9c27b0' }} />
                <Typography variant="caption" color="text.secondary">Active departments</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Toggle */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" spacing={2}>
          <ToggleButtonGroup value={chartType} exclusive onChange={(e, val) => val && setChartType(val)} size="small">
            <ToggleButton value="overview">Overview</ToggleButton>
            <ToggleButton value="categories">Categories</ToggleButton>
            <ToggleButton value="status">Status</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Paper>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {chartType === 'overview' && (
          <>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Monthly Report Trends</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <RechartsTooltip />
                    <Legend />
                    <Line type="monotone" dataKey="generated" stroke="#2196f3" name="Generated" />
                    <Line type="monotone" dataKey="completed" stroke="#4caf50" name="Completed" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Quick Stats</Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Most Active Department</Typography>
                    <Typography variant="h5" fontWeight="bold">Sales</Typography>
                    <Typography variant="caption" color="text.secondary">12 reports generated</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Top Contributor</Typography>
                    <Typography variant="h5" fontWeight="bold">Alicia Reyes</Typography>
                    <Typography variant="caption" color="text.secondary">8 reports created</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Average Views</Typography>
                    <Typography variant="h5" fontWeight="bold">44</Typography>
                    <Typography variant="caption" color="text.secondary">Per report</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </>
        )}

        {chartType === 'categories' && (
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Report Categories Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}

        {chartType === 'status' && (
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Report Status Overview</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={statusData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={100} dataKey="value">
                    {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <RechartsTooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
      </Grid>

      {/* Reports Table */}
      <Paper sx={{ p: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
          <TextField
            placeholder="Search reports..."
            size="small"
            value={searchTerm}
            onChange={handleLocalSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select value={typeFilter} label="Type" onChange={(e) => setTypeFilter(e.target.value)}>
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="sales">Sales</MenuItem>
              <MenuItem value="analytics">Analytics</MenuItem>
              <MenuItem value="inventory">Inventory</MenuItem>
              <MenuItem value="financial">Financial</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select value={statusFilter} label="Status" onChange={(e) => setStatusFilter(e.target.value)}>
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Generated By</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Views</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedReports.map((report) => (
                <TableRow key={report.id} hover>
                  <TableCell>{report.id}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{report.title}</TableCell>
                  <TableCell>
                    <Chip 
                      label={report.type} 
                      size="small" 
                      color={report.type === 'sales' ? 'primary' : report.type === 'analytics' ? 'secondary' : 'default'}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{report.generatedBy}</TableCell>
                  <TableCell>{report.department}</TableCell>
                  <TableCell>
                    <Chip 
                      label={getStatusLabel(report.status)} 
                      size="small" 
                      color={getStatusColor(report.status)}
                    />
                  </TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Visibility sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="body2">{report.views}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton size="small" color="primary" onClick={() => { setSelectedReport(report); setOpenDialog(true); }}>
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="error" onClick={() => handleDelete(report.id)}>
                        <Delete fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredReports.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Generate/Edit Report Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedReport ? 'Edit Report' : 'Generate New Report'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField 
              label="Report Title" 
              fullWidth 
              size="small" 
              defaultValue={selectedReport?.title || ''} 
            />
            <FormControl fullWidth size="small">
              <InputLabel>Report Type</InputLabel>
              <Select label="Report Type" defaultValue={selectedReport?.type || 'sales'}>
                <MenuItem value="sales">Sales Report</MenuItem>
                <MenuItem value="analytics">Analytics Report</MenuItem>
                <MenuItem value="inventory">Inventory Report</MenuItem>
                <MenuItem value="financial">Financial Report</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Department</InputLabel>
              <Select label="Department" defaultValue={selectedReport?.department || 'Sales'}>
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Operations">Operations</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Product">Product</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              label="Generated By" 
              fullWidth 
              size="small" 
              defaultValue={selectedReport?.generatedBy || ''} 
            />
            <TextField 
              label="Date" 
              type="date" 
              fullWidth 
              size="small" 
              defaultValue={selectedReport?.date || new Date().toISOString().split('T')[0]}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {selectedReport ? 'Update' : 'Generate'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReportsPage;