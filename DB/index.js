const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user', password: 'userpass' },
];

// Secret key for JWT signing token
const SECRET_KEY = 'your_secret_key'; // Change this to a more secure key

app.use(bodyParser.json());
app.use(cors())
// Serve static files first
app.use(express.static(path.join(__dirname, 'client/build')));

// API route for login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        // Generate a token
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.json({ success: false });
    }
});

// Other API routes
app.get('/api/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/test', (req, res) => {
    res.send('Test Endpoint');
});

app.get('/api/sample', (req, res) => {
    res.send('Sample Endpoint');
});

// Catch-all route to serve the frontend app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});