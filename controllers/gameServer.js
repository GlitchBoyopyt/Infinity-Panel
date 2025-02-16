const { exec } = require('child_process');

const startServer = (req, res) => {
    exec('bash start_server.sh', (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        res.json({ message: 'Server Started', output: stdout });
    });
};

const stopServer = (req, res) => {
    exec('bash stop_server.sh', (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        res.json({ message: 'Server Stopped', output: stdout });
    });
};

module.exports = { startServer, stopServer };
