const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'index.html');
  if (req.url === '/podcast' || req.url === '/podcast.html') {
    filePath = path.join(__dirname, 'podcast.html');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(500); res.end('Error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});
server.listen(process.env.PORT || 5002, () => console.log('NormiesTV site running'));
