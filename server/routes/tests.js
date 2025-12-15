const express = require('express');
const router = express.Router();
const Test = require('../models/Test');
const Question = require('../models/Question');

router.get('/', async (req, res) => {
  try{
    const tests = await Test.find();
    res.json(tests);
  }catch(err){ console.error(err); res.status(500).json({ error:'Server error' });}
});

router.get('/:testId/questions', async (req, res) => {
  try{
    const questions = await Question.find({ testId: req.params.testId });
    res.json(questions);
  }catch(err){ console.error(err); res.status(500).json({ error:'Server error' });}
});

module.exports = router;
