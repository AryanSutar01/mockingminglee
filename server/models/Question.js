const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  testId: String,
  text: String,
  options: [String],
  correctOptionIndex: Number
});
module.exports = mongoose.model('Question', QuestionSchema);
