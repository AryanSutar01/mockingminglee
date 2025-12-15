// In-memory Attempt model (no MongoDB)
const db = require('../storage');

class Attempt {
  static async create(data) {
    return db.createAttempt(data);
  }

  static async find(query) {
    if (query.userId) {
      return db.findAttemptsByUserId(query.userId);
    }
    return [];
  }

  static async findById(id) {
    const attempt = db.findAttemptById(id);
    if (!attempt) return null;
    // Convert to object with _doc property for compatibility
    return {
      _doc: attempt,
      ...attempt
    };
  }
}

module.exports = Attempt;
