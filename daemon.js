const express = require("express");
const si = require("systeminformation"); // System monitoring package
const { exec } = require("child_process");

const app = express();
app.use(express.json());
app.use(require("cors")());

const PORT = 4000;
let serverStatus = {}; // Store server performance data

// Function to get system stats
const getServerStats = async (serverId) => {
    const cpu = await si.currentLoad();
    const mem = await si.mem();
    const uptime = await si.time();

    return {
        cpuUsage: cpu.currentLoad.toFixed(2) + "%",
        ramUsage: ((mem.used / mem.total) * 100).toFixed(2) + "%",
        uptime: uptime.uptime + "s",
        status: serverStatus[serverId] || "unknown",
    };
};

// Start a server
app.post("/start/:serverId", async (req, res) => {
    const { serverId } = req.params;
    exec(`./start-${serverId}.sh`, () => {
        serverStatus[serverId] = "running";
    });
    res.json({ msg: `Server ${serverId} started!` });
});

// Stop a server
app.post("/stop/:serverId", async (req, res) => {
    const { serverId } = req.params;
    exec(`./stop-${serverId}.sh`, () => {
        serverStatus[serverId] = "stopped";
    });
    res.json({ msg: `Server ${serverId} stopped!` });
});

// Get server performance data
app.get("/stats/:serverId", async (req, res) => {
    const { serverId } = req.params;
    const stats = await getServerStats(serverId);
    res.json(stats);
});

// Start the Daemon API
app.listen(PORT, () => console.log(`✅ Daemon running on port ${PORT}`));
