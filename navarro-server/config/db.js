const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/navarro_webprog';
        
        console.log('Connecting to MongoDB at:', mongoURI);
        
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Database name: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;