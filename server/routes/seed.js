const router = require("express").Router();
const seedData = require("../seedData");

router.post("/", async (req, res) => {
  try {
    const result = await seedData();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to seed data" });
  }
});

module.exports = router;
