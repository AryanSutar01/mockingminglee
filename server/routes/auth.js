const router = require('express').Router();
const User = require('../models/User');

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
    
    const existing = await User.findOne({ email });
    if(existing) return res.status(400).json({ error: 'Email already in use' });
    
    const user = await User.create({ name, email, password });
    res.json({ user });
  } catch(err){
    console.error(err);
    if (err.message === 'Email already in use') {
      return res.status(400).json({ error: 'Email already in use' });
    }
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({ message: 'Email and Password required' });
    
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: 'User not found' });
    if(user.password !== password) return res.status(400).json({ message: 'Invalid password' });
    
    res.json({ user });
  } catch(err){
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
