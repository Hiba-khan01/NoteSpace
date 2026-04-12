const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

const connectDB = require("./config/db"); 
const notesRoutes = require("./routes/notesRoutes");
const rateLimiter = require("./middleware/rateLimiter");
const cors = require("cors");

const PORT = process.env.PORT || 5001;


// Middleware
if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: "http://localhost:5173",
  }));
}

app.use(express.json());
app.use(rateLimiter);


// Routes
app.use("/api/notes", notesRoutes);


if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../frontend/dist");

  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}


// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});