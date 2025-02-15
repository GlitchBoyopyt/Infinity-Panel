const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = new User({ username, password });
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
