// pages/DashboardPages/UsersPage.jsx
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
} from '@mui/material';
import {
  Edit,
  Delete,
  Block,
  CheckCircle,
  Search,
  Add,
} from '@mui/icons-material';

// Sample user data
const sampleUsers = [
  { id: 1, firstName: 'Alicia', lastName: 'Reyes', age: 29, gender: 'female', contactNumber: '09123456789', email: 'alicia.reyes@example.com', role: 'admin', username: 'aliciatareyes', address: 'Sampaloc, Manila', isActive: true },
  { id: 2, firstName: 'Marco', lastName: 'Santos', age: 31, gender: 'male', contactNumber: '09234567890', email: 'marco.santos@example.com', role: 'viewer', username: 'marcosantos', address: 'Tondo, Manila', isActive: true },
  { id: 3, firstName: 'Blanca', lastName: 'Cruz', age: 26, gender: 'female', contactNumber: '09345678901', email: 'blanca.cruz@example.com', role: 'editor', username: 'blancacruz', address: 'Quezon City', isActive: false },
  { id: 4, firstName: 'Nathan', lastName: 'Diaz', age: 34, gender: 'male', contactNumber: '09456789012', email: 'nathan.diaz@example.com', role: 'viewer', username: 'nathandiaz', address: 'Pasig City', isActive: true },
  { id: 5, firstName: 'Jasmine', lastName: 'Garcia', age: 28, gender: 'female', contactNumber: '09567890123', email: 'jasmine.garcia@example.com', role: 'editor', username: 'jasminegarcia', address: 'Makati City', isActive: false },
  { id: 6, firstName: 'Ethan', lastName: 'Lopez', age: 33, gender: 'male', contactNumber: '09678901234', email: 'ethan.lopez@example.com', role: 'viewer', username: 'ethanlopez', address: 'Tagalog City', isActive: true },
];

const UsersPage = () => {
  const { globalSearchQuery, setGlobalSearchQuery } = useOutletContext();
  const [users, setUsers] = useState(sampleUsers);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState(globalSearchQuery || '');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isActive: !user.isActive } : user
    ));
  };

  const handleLocalSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (setGlobalSearchQuery) {
      setGlobalSearchQuery(value);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === "" || 
      `${user.firstName} ${user.lastName} ${user.email} ${user.username}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && user.isActive) ||
      (statusFilter === 'inactive' && !user.isActive);
    return matchesSearch && matchesRole && matchesStatus;
  });

  const paginatedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%', p: { xs: 2, sm: 3 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Users Management</Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => { setSelectedUser(null); setOpenDialog(true); }}>
          Add User
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
          <TextField
            placeholder="Search users..."
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
            <InputLabel>Role</InputLabel>
            <Select value={roleFilter} label="Role" onChange={(e) => setRoleFilter(e.target.value)}>
              <MenuItem value="all">All Roles</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="editor">Editor</MenuItem>
              <MenuItem value="viewer">Viewer</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select value={statusFilter} label="Status" onChange={(e) => setStatusFilter(e.target.value)}>
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Chip 
                      label={user.role} 
                      size="small" 
                      color={user.role === 'admin' ? 'primary' : user.role === 'editor' ? 'secondary' : 'default'}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={user.isActive ? 'Active' : 'Inactive'} 
                      size="small" 
                      color={user.isActive ? 'success' : 'error'}
                      variant={user.isActive ? 'filled' : 'outlined'}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton size="small" color="primary" onClick={() => { setSelectedUser(user); setOpenDialog(true); }}>
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color={user.isActive ? 'warning' : 'success'} onClick={() => handleToggleStatus(user.id)}>
                        {user.isActive ? <Block fontSize="small" /> : <CheckCircle fontSize="small" />}
                      </IconButton>
                      <IconButton size="small" color="error" onClick={() => handleDelete(user.id)}>
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
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedUser ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="First Name" fullWidth size="small" defaultValue={selectedUser?.firstName || ''} />
              <TextField label="Last Name" fullWidth size="small" defaultValue={selectedUser?.lastName || ''} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="Email" type="email" fullWidth size="small" defaultValue={selectedUser?.email || ''} />
              <TextField label="Username" fullWidth size="small" defaultValue={selectedUser?.username || ''} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="Age" fullWidth size="small" defaultValue={selectedUser?.age || ''} />
              <TextField label="Contact Number" fullWidth size="small" defaultValue={selectedUser?.contactNumber || ''} />
            </Stack>
            <TextField label="Address" fullWidth size="small" defaultValue={selectedUser?.address || ''} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {selectedUser ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersPage;