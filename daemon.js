const { exec } = require("child_process");

const startServer = (serverId) => {
    console.log(`Starting server: ${serverId}`);
    exec(`./start-${serverId}.sh`, (error, stdout, stderr) => {
        if (error) console.error(`Error: ${error.message}`);
        if (stderr) console.error(`Stderr: ${stderr}`);
        console.log(stdout);
    });
};

const stopServer = (serverId) => {
    console.log(`Stopping server: ${serverId}`);
    exec(`./stop-${serverId}.sh`, (error, stdout, stderr) => {
        if (error) console.error(`Error: ${error.message}`);
        if (stderr) console.error(`Stderr: ${stderr}`);
        console.log(stdout);
    });
};

// Example: Auto-start a game server
setInterval(() => startServer("survival"), 60000);
