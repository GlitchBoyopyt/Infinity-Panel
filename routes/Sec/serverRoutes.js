const express = require('express');
const Server = require('../models/Server');

const router = express.Router();

// Create a new game server
router.post('/servers', async (req, res) => {
    try {
        const { userId, name, expiresAt } = req.body;
        if (!userId || !name || !expiresAt) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const server = new Server({ userId, name, expiresAt, status: "stopped" });
        await server.save();

        res.status(201).json({ msg: "Server created successfully!", server });
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

// Get a single server by ID
router.get('/servers/:serverId', async (req, res) => {
    try {
        const server = await Server.findById(req.params.serverId).populate('userId', 'username');
        if (!server) {
            return res.status(404).json({ error: "Server not found" });
        }
        res.json(server);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
