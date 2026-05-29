const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

const createUser = async (req, res) => {
    try {
        console.log('Creating user with data:', req.body);
        
        const { firstName, lastName, email, username, password, type, isActive, age, gender, contactNumber, address } = req.body;
        
        if (!firstName || !lastName || !email || !username || !password) {
            return res.status(400).json({ 
                message: 'Missing required fields: firstName, lastName, email, username, password are required' 
            });
        }
        
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email or username' });
        }
        
        // ✅ Removed manual bcrypt.hash — the pre('save') hook handles it
        const user = new User({
            firstName,
            lastName,
            email,
            username,
            password, // plain password — hook will hash it
            type: type || 'viewer',
            isActive: isActive !== undefined ? isActive : true,
            age: age || null,
            gender: gender || null,
            contactNumber: contactNumber || null,
            address: address || null
        });
        
        const savedUser = await user.save();
        console.log('User created successfully:', savedUser._id);
        
        const { password: pwd, ...userWithoutPassword } = savedUser.toObject();
        res.status(201).json(userWithoutPassword);
        
    } catch (error) {
        console.error('Create user error:', error);
        res.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const updateData = { ...req.body };
        
    
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        
        const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.isActive) {
            return res.status(403).json({ message: 'Your account is inactive. Please contact support' });
        }

        if (user.type === 'viewer') {
            return res.status(403).json({ message: 'Viewers are not allowed to log in' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, type: user.type },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({ 
            message: 'Login successful', 
            token, 
            type: user.type,
            firstName: user.firstName 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, loginUser };