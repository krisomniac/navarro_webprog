const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            console.error('MONGO_URI environment variable is not defined');
            return;
        }

        console.log('Connecting to MongoDB...');

        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Database name: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
   
    }
};

module.exports = connectDB;