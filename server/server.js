const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// No MongoDB needed - using in-memory storage

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tests", require("./routes/tests"));
app.use("/api/attempts", require("./routes/attempts"));
// app.use("/api/seed", require("./routes/seed"));  // <-- ADD THIS
// app.use("/api/seed" , require("./routes/seed"));
app.use("/api/seed" , require("./routes/seed"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
