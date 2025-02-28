import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password });
            localStorage.setItem("token", res.data.token);
            window.location.href = "/dashboard";
        } catch (err) {
            setError(err.response?.data?.error || "Login failed. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                disabled={loading}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                disabled={loading}
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </div>
    );
};

export default Login;
