// src/Component/Login/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                username,
                password
            });
            const { token } = response.data;
            localStorage.setItem('user', JSON.stringify({ token }));
            navigate("/home");
        } catch (error) {
            console.error("Login failed:", error);
            // Optionally set an error message here
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Login Page</h1>
            <form onSubmit={handleLogin} style={styles.form}>
                <label style={styles.label}>Username:</label>
                <input
                    type='text'
                    placeholder='Enter your email'
                    value={username}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <br />
                <label style={styles.label}>Password:</label>
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <br />
                <button type='submit' style={styles.button}>Login</button>
            </form>
            <a href='/register' style={styles.link}>Don't have an account? Register</a>
        </div>
    );
};

// Styles object
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '20px',
    },
    title: {
        marginBottom: '20px',
        fontSize: '2rem',
        color: '#333',
    },
    form: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    link: {
        marginTop: '10px',
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '0.9rem',
    },
};

export default LoginPage;
