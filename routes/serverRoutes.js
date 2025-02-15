const express = require('express');
const Server = require('../models/Server');

const router = express.Router();

// Create a new game server
router.post('/servers', async (req, res) => {
    try {
        const { userId, name, expiresAt } = req.body;

        const server = new Server({ userId, name, expiresAt });
        await server.save();

        res.status(201).json(server);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all game servers
router.get('/servers', async (req, res) => {
    try {
        const servers = await Server.find().populate('userId', 'username');
        res.json(servers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
