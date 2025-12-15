const express = require("express");
const cors = require("cors");
const Test = require("./models/Test");
const seedData = require("./seedData");

const app = express();
app.use(cors());
app.use(express.json());

// No MongoDB needed - using in-memory storage

// Auto-seed data on server start if no tests exist
async function autoSeed() {
  const User = require("./models/User");
  
  const tests = await Test.find();
  if (tests.length === 0) {
    console.log("No tests found. Seeding sample data...");
    try {
      await seedData();
      console.log("✅ Sample data seeded successfully!");
    } catch (err) {
      console.error("❌ Failed to seed data:", err);
    }
  } else {
    console.log(`✅ Found ${tests.length} existing test(s). Skipping seed.`);
  }
  
  // Create a default test user if no users exist
  const existingUser = await User.findOne({ email: "test@example.com" });
  if (!existingUser) {
    try {
      await User.create({
        name: "Test User",
        email: "test@example.com",
        password: "test123"
      });
      console.log("✅ Default test user created (test@example.com / test123)");
    } catch (err) {
      console.error("❌ Failed to create test user:", err);
    }
  }
}

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tests", require("./routes/tests"));
app.use("/api/attempts", require("./routes/attempts"));
app.use("/api/seed", require("./routes/seed"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`);
  await autoSeed();
});
