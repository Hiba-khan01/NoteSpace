const express = require("express");
require("dotenv").config();

const app = express();

const connectDB = require("./config/db"); 
const notesRoutes = require("./routes/notesRoutes");
const rateLimiter = require("./middleware/rateLimiter");
const cors = require("cors");

const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);


// app.use((req, res, next) => {
//     console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
//     next();
// });

// Routes
app.use("/api/notes", notesRoutes);

// Connect DB
connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
