// In-memory User model (no MongoDB)
const db = require('../storage');

class User {
  static async create(data) {
    // Check if email already exists
    const existing = db.findUserByEmail(data.email);
    if (existing) {
      throw new Error('Email already in use');
    }
    return db.createUser(data);
  }

  static async findOne(query) {
    if (query.email) {
      return db.findUserByEmail(query.email);
    }
    if (query._id) {
      return db.findUserById(query._id);
    }
    return null;
  }

  static async findById(id) {
    return db.findUserById(id);
  }

  static async find(query) {
    if (query && query.email) {
      const user = db.findUserByEmail(query.email);
      return user ? [user] : [];
    }
    // Return empty array for now (can add getAllUsers method to storage if needed)
    return [];
  }
}

module.exports = User;
