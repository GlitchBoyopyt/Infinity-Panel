// Import required modules
const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Route to Check Daemon Status
app.get('/status', (req, res) => {
    res.json({ status: 'Daemon is running', uptime: process.uptime() });
});

// API Route to Start a Server (Example: Docker Container)
app.post('/start', (req, res) => {
    const { containerName } = req.body;
    if (!containerName) return res.status(400).json({ error: 'Container name required' });
    
    exec(`docker start ${containerName}`, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        res.json({ message: `Started container ${containerName}`, output: stdout });
    });
});

// API Route to Stop a Server
app.post('/stop', (req, res) => {
    const { containerName } = req.body;
    if (!containerName) return res.status(400).json({ error: 'Container name required' });
    
    exec(`docker stop ${containerName}`, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        res.json({ message: `Stopped container ${containerName}`, output: stdout });
    });
});

// Start Daemon
app.listen(PORT, () => {
    console.log(`Daemon is running on port ${PORT}`);
});
                                             
