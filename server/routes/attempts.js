const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');
const Question = require('../models/Question');

/**
 * SAVE ATTEMPT
 */
router.post('/', async (req, res) => {
  try {
    const { userId, testId, answers } = req.body;

    const questions = await Question.find({ testId });
    let score = 0;

    questions.forEach(q => {
      if (answers && answers[q._id] == q.correctOptionIndex) {
        score++;
      }
    });

    const attempt = await Attempt.create({
      userId,
      testId,
      answers,
      score,
      totalQuestions: questions.length
    });

    res.json(attempt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save attempt' });
  }
});

/**
 * ✅ GET ALL ATTEMPTS OF A USER  (THIS WAS MISSING)
 */
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'userId required' });
    }

    const attempts = await Attempt.find({ userId }).sort({ createdAt: -1 });
    res.json(attempts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET SINGLE ATTEMPT DETAILS
 */
router.get('/:attemptId', async (req, res) => {
  try {
    const attempt = await Attempt.findById(req.params.attemptId);
    if (!attempt) return res.status(404).json({ error: 'Not found' });

    const questions = await Question.find({ testId: attempt.testId });
    res.json({ ...attempt._doc, questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
