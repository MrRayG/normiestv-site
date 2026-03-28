const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  const file = path.join(__dirname, 'index.html');
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); res.end('Error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});
server.listen(process.env.PORT || 5002, () => console.log('NormiesTV site running'));
