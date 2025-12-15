// In-memory Question model (no MongoDB)
const db = require('../storage');

class Question {
  static async create(data) {
    return db.createQuestion(data);
  }

  static async find(query) {
    if (query.testId) {
      return db.findQuestionsByTestId(query.testId);
    }
    return [];
  }

  static async findById(id) {
    return db.findQuestionById(id);
  }

  static async insertMany(questionsData) {
    return db.insertManyQuestions(questionsData);
  }

  static async deleteMany() {
    db.deleteAllQuestions();
    return { deletedCount: 0 }; // For compatibility
  }
}

module.exports = Question;
