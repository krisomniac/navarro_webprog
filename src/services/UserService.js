// src/services/UserService.js
const API_URL = 'http://localhost:5000/api';

// Fetch all users
export async function fetchUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        console.log('Fetch users response:', data);
        return { users: data.users || [] };
    } catch (error) {
        console.error('Error fetching users:', error);
        return { users: [] };
    }
}

// Create a new user
export async function createUser(userData) {
    try {
        console.log('Sending user data:', userData);
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        console.log('Create user response:', data);
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to create user');
        }
        
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Update an existing user
export async function updateUser(id, userData) {
    try {
        const response = await fetch(`${API_URL}/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

// Delete a user
export async function deleteUser(id) {
    try {
        const response = await fetch(`${API_URL}/users/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

// Login user
export async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}