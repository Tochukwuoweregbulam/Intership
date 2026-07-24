import dotenv from "dotenv";
import express from "express"; 
import connectDB from "./config/db.js"
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/auth_Routes.js"

dotenv.config();



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

app.use('/auth', authRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});