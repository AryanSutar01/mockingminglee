const mongoose = require('mongoose');
const AttemptSchema = new mongoose.Schema({
  userId: String,
  testId: String,
  answers: Object,
  score: Number,
  totalQuestions: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Attempt', AttemptSchema);
