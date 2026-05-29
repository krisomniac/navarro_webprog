require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Navarro Server API" });
});

// Only listen locally, not on Vercel
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Required for Vercel
module.exports = app;