// pages/DashboardPages/UsersPage.jsx
import { useState, useEffect } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Paper,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DataGrid } from '@mui/x-data-grid';
import { 
  Add, 
  Search, 
  Edit, 
  Delete, 
  Refresh,
  PeopleAlt,
  TrendingUp,
  VerifiedUser,
} from '@mui/icons-material';
import { fetchUsers, createUser, updateUser, deleteUser } from '../../services/UserService';

const types = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    type: 'editor',
    username: '',
    password: '',
    address: '',
    isActive: true,
};

const labelize = (value) =>
    value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Calculate stats
  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.isActive).length,
    activePercentage: users.length ? ((users.filter(u => u.isActive).length / users.length) * 100).toFixed(1) : 0,
    totalAdmins: users.filter(u => u.type === 'admin').length,
  };

  useEffect(() => {
    loadUsersFromAPI();
  }, []);

  const loadUsersFromAPI = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetchUsers();
      console.log('API Response:', response);
      
      if (response.users) {
        setUsers(response.users);
      } else if (response.data?.users) {
        setUsers(response.data.users);
      } else if (Array.isArray(response)) {
        setUsers(response);
      } else {
        setUsers([]);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load users');
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?._id ?? null });
    if (user) {
      setForm({ ...blankForm, ...user });
    } else {
      setForm({ ...blankForm });
    }
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    const requiredFields = [
      { key: 'firstName', label: 'First name' },
      { key: 'lastName', label: 'Last name' },
      { key: 'age', label: 'Age' },
      { key: 'gender', label: 'Gender' },
      { key: 'contactNumber', label: 'Contact number' },
      { key: 'email', label: 'Email' },
      { key: 'type', label: 'Type' },
      { key: 'username', label: 'Username' },
      { key: 'address', label: 'Address' },
    ];

    if (!modal.id) {
      requiredFields.push({ key: 'password', label: 'Password' });
    }

    requiredFields.forEach(({ key, label }) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!nextErrors.email && users.some((user) => user._id !== modal.id && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && users.some((user) => user._id !== modal.id && user.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim())) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits (e.g. 09171234567).';
    }
    
    if (!nextErrors.age && isNaN(form.age.trim())) {
      nextErrors.age = 'Age must be a valid number (e.g. 23).';
    }

    if (!nextErrors.username && /\s/.test(form.username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }

    if (!nextErrors.password && !modal.id && form.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    return nextErrors;
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilterType('');
    setFilterGender('');
    setFilterStatus('all');
  };

  const filteredUsers = users.filter((u) => {
    const q = String(searchQuery ?? '').trim().toLowerCase();
    if (q) {
      const matches = [u.firstName, u.lastName, u.email, u.username]
        .map((v) => String(v ?? '').toLowerCase())
        .some((v) => v.includes(q));
      if (!matches) return false;
    }
    if (filterType && u.type !== filterType) return false;
    if (filterGender && u.gender !== filterGender) return false;
    if (filterStatus === 'active' && !u.isActive) return false;
    if (filterStatus === 'inactive' && u.isActive) return false;
    return true;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: parseInt(form.age),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      type: form.type.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      address: form.address.trim(),
      isActive: form.isActive,
    };

    if (!modal.id) {
      nextUser.password = form.password;
    }

    try {
      if (modal.id) {
        await updateUser(modal.id, nextUser);
      } else {
        await createUser(nextUser);
      }
      closeModal();
      // Reload users after successful save
      await loadUsersFromAPI();
    } catch (err) {
      setErrors({ submit: err.response?.data?.message || 'Failed to save user' });
    }
  };

  const toggleStatus = async (id) => {
    try {
      const user = users.find((u) => u._id === id);
      await updateUser(id, { isActive: !user.isActive });
      await loadUsersFromAPI();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user status');
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        await loadUsersFromAPI();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete user');
      }
    }
  };

  const handleRefresh = () => {
    loadUsersFromAPI();
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90, valueGetter: (value) => value?.slice(-6) || '' },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 170,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim(),
    },
    { field: 'username', headerName: 'Username', minWidth: 150 },
    { field: 'age', headerName: 'Age', width: 80 },
    {
      field: 'gender',
      headerName: 'Gender',
      minWidth: 100,
      valueGetter: (value, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 160 },
    { field: 'email', headerName: 'Email', flex: 1.2, minWidth: 220 },
    {
      field: 'type',
      headerName: 'Role',
      minWidth: 120,
      valueGetter: (value, row) => labelize(row.type),
      renderCell: ({ row }) => (
        <Chip 
          label={labelize(row.type)} 
          size="small" 
          color={row.type === 'admin' ? 'primary' : row.type === 'editor' ? 'secondary' : 'default'}
        />
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'error'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 280,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => openModal(row)}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row._id)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => handleDelete(row._id)}
          >
            Delete
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', p: { xs: 2, sm: 3 } }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Users Management</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<Refresh />} onClick={handleRefresh}>
            Refresh
          </Button>
          <Button variant="contained" startIcon={<Add />} onClick={() => openModal()}>
            Add User
          </Button>
        </Stack>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#e3f2fd', height: '100%' }}>
            <CardContent>
              <Typography color="primary" gutterBottom variant="body2">Total Users</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.totalUsers}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <PeopleAlt sx={{ fontSize: 16, color: '#1976d2' }} />
                <Typography variant="caption" color="text.secondary">Registered users</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#e8f5e9', height: '100%' }}>
            <CardContent>
              <Typography color="success.main" gutterBottom variant="body2">Active Users</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.activeUsers}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <VerifiedUser sx={{ fontSize: 16, color: '#4caf50' }} />
                <Typography variant="caption" color="text.secondary">{stats.activePercentage}% active rate</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#fff3e0', height: '100%' }}>
            <CardContent>
              <Typography color="warning.main" gutterBottom variant="body2">Admin Users</Typography>
              <Typography variant="h3" fontWeight="bold">{stats.totalAdmins}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <TrendingUp sx={{ fontSize: 16, color: '#ff9800' }} />
                <Typography variant="caption" color="text.secondary">With admin access</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f3e5f5', height: '100%' }}>
            <CardContent>
              <Typography color="secondary" gutterBottom variant="body2">User Roles</Typography>
              <Typography variant="h3" fontWeight="bold">{types.length}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
                <PeopleAlt sx={{ fontSize: 16, color: '#9c27b0' }} />
                <Typography variant="caption" color="text.secondary">Different roles</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center' }}>
          <TextField
            size="small"
            label="Search"
            placeholder="Search by name, email or username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }}
            sx={{ flex: 1 }}
          />
          <TextField 
            size="small" 
            select 
            label="Role" 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)} 
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="">All Roles</MenuItem>
            {types.map((t) => <MenuItem key={t} value={t}>{labelize(t)}</MenuItem>)}
          </TextField>
          <TextField 
            size="small" 
            select 
            label="Gender" 
            value={filterGender} 
            onChange={(e) => setFilterGender(e.target.value)} 
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="">All Genders</MenuItem>
            {genders.map((g) => <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>)}
          </TextField>
          <TextField 
            size="small" 
            select 
            label="Status" 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)} 
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
          <Button onClick={clearFilters} size="small">Clear Filters</Button>
        </Stack>
      </Paper>

      {/* Users Table */}
      <Paper sx={{ p: 2 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
            <CircularProgress />
          </Box>
        ) : filteredUsers.length > 0 ? (
          <Box sx={{ height: { xs: 460, sm: 520 }, width: '100%' }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              getRowId={(row) => row._id}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10, 25]}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              sx={{
                border: 0,
                '& .MuiDataGrid-columnHeaders': {
                  bgcolor: '#f5f5f5',
                  fontWeight: 'bold',
                },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info">
            No users found. Click "Add User" to create your first record.
          </Alert>
        )}
      </Paper>

      {/* Add/Edit User Dialog */}
      <Dialog 
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontWeight: 'bold' }}>
            {modal.id ? 'Edit User' : 'Add New User'}
          </DialogTitle>
          <DialogContent dividers>
            <Stack spacing={2} sx={{ pt: 1 }}>
              {errors.submit && (
                <Alert severity="error" onClose={() => setErrors({})}>
                  {errors.submit}
                </Alert>
              )}
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age', { type: 'number' })} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('username', 'Username')} />
                <TextField
                  {...fieldProps('password', 'Password')}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('type', 'Role', { select: true })}>
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>
                      {labelize(type)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps('address', 'Address')} />
              </Stack>
              
              <FormControlLabel
                control={<Switch name="isActive" checked={form.isActive} onChange={handleChange} />}
                label="Active"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;