const express = require('express');
const path = require('path');

const app = express();

app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/style.css'));
});

app.get('/Recussion.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/Recussion.js'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log('Server started at http://localhost:3000');