// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle requests to the root URL ('/')
    if (req.url === '/') {
        // Serve index.html
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    // Handle requests to the CSS file ('/styles.css')
    else if (req.url === '/styles.css') {
        // Serve index.css
        fs.readFile(path.join(__dirname, 'styles.css'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading styles.css');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
        });
    }
    // Handle other routes with 404
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
