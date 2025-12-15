// In-memory Test model (no MongoDB)
const db = require('../storage');

class Test {
  static async create(data) {
    return db.createTest(data);
  }

  static async find() {
    return db.findAllTests();
  }

  static async findById(id) {
    return db.findTestById(id);
  }

  static async deleteMany() {
    db.deleteAllTests();
    return { deletedCount: 0 }; // For compatibility
  }
}

module.exports = Test;
