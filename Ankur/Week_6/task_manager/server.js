require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Connect Database
connectDB();
console.log(process.env.MONGO_URI);
// Middleware
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Task Manager API");
});

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});