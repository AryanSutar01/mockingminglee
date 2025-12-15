const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mockmingle");

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tests", require("./routes/tests"));
app.use("/api/attempts", require("./routes/attempts"));
// app.use("/api/seed", require("./routes/seed"));  // <-- ADD THIS
// app.use("/api/seed" , require("./routes/seed"));
app.use("/api/seed" , require("./routes/seed"));
app.listen(5000, () => console.log("Server running on 5000"));
