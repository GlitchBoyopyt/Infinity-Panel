import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
    const [servers, setServers] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/servers`)
            .then((res) => setServers(res.data))
            .catch((err) => console.error(err));

        servers.forEach((server) => {
            axios.get(`${process.env.REACT_APP_API_URL}/servers/${server._id}/stats`)
                .then((res) => {
                    setStats((prevStats) => ({ ...prevStats, [server._id]: res.data }));
                })
                .catch((err) => console.error(err));
        });
    }, [servers]);

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">Game Panel ControlRoom</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {servers.map((server) => (
                    <Card key={server._id} className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6">{server.name}</Typography>
                            <Typography>Status: {server.status}</Typography>
                            {stats[server._id] && (
                                <>
                                    <Typography>CPU Usage: {stats[server._id].cpuUsage}</Typography>
                                    <Typography>RAM Usage: {stats[server._id].ramUsage}</Typography>
                                    <Typography>Uptime: {stats[server._id].uptime}</Typography>
                                </>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

