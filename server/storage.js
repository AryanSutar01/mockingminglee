// Simple in-memory database storage
// Data persists only while server is running

class InMemoryDB {
  constructor() {
    this.users = [];
    this.tests = [];
    this.questions = [];
    this.attempts = [];
    this.nextUserId = 1;
    this.nextTestId = 1;
    this.nextQuestionId = 1;
    this.nextAttemptId = 1;
  }

  // User methods
  createUser(data) {
    const user = {
      _id: String(this.nextUserId++),
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  findUserByEmail(email) {
    return this.users.find(u => u.email === email) || null;
  }

  findUserById(id) {
    return this.users.find(u => u._id === id) || null;
  }

  // Test methods
  createTest(data) {
    const test = {
      _id: String(this.nextTestId++),
      name: data.name,
      description: data.description,
      createdAt: new Date()
    };
    this.tests.push(test);
    return test;
  }

  findAllTests() {
    return [...this.tests];
  }

  findTestById(id) {
    return this.tests.find(t => t._id === id) || null;
  }

  deleteAllTests() {
    this.tests = [];
    this.nextTestId = 1;
  }

  // Question methods
  createQuestion(data) {
    const question = {
      _id: String(this.nextQuestionId++),
      testId: data.testId,
      text: data.text,
      options: data.options,
      correctOptionIndex: data.correctOptionIndex
    };
    this.questions.push(question);
    return question;
  }

  insertManyQuestions(questionsData) {
    const questions = questionsData.map(data => ({
      _id: String(this.nextQuestionId++),
      testId: data.testId,
      text: data.text,
      options: data.options,
      correctOptionIndex: data.correctOptionIndex
    }));
    this.questions.push(...questions);
    return questions;
  }

  findQuestionsByTestId(testId) {
    return this.questions.filter(q => q.testId === testId);
  }

  findQuestionById(id) {
    return this.questions.find(q => q._id === id) || null;
  }

  deleteAllQuestions() {
    this.questions = [];
    this.nextQuestionId = 1;
  }

  // Attempt methods
  createAttempt(data) {
    const attempt = {
      _id: String(this.nextAttemptId++),
      userId: data.userId,
      testId: data.testId,
      answers: data.answers,
      score: data.score,
      totalQuestions: data.totalQuestions,
      createdAt: new Date()
    };
    this.attempts.push(attempt);
    return attempt;
  }

  findAttemptsByUserId(userId) {
    return this.attempts
      .filter(a => a.userId === userId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  findAttemptById(id) {
    return this.attempts.find(a => a._id === id) || null;
  }
}

// Export singleton instance
const db = new InMemoryDB();
module.exports = db;

<<<<<<< HEAD

=======
>>>>>>> 69b78e7d2eaf9daf94695f345a8c5e058c0592a5
